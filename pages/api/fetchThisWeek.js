import xml2js from "xml2js";
import hash from "object-hash";
async function parseXML(xml) {
  const parser = new xml2js.Parser();
  const json = await parser.parseStringPromise(xml);
  return json;
}

const countryFlags = {
  USD: "🇺🇸",
  EUR: "🇪🇺",
  GBP: "🇬🇧",
  AUD: "🇦🇺",
  CAD: "🇨🇦",
  NZD: "🇳🇿",
  CHF: "🇨🇭",
  JPY: "🇯🇵",
  CNY: "🇨🇳",
};

function convertToBerlinTime(time) {
  // Extract the hours, minutes, and meridiem from the time string
  const [timeDigits, meridiem] = time.split(/(?<=\d)(am|pm)/i);
  // Parse the hours and minutes
  let hours = parseInt(timeDigits.slice(0, -2));
  const minutes = parseInt(timeDigits.slice(-2));
  // Adjust hours based on meridiem
  if (meridiem.toLowerCase() === "pm" && hours !== 12) {
    hours += 12;
  } else if (meridiem.toLowerCase() === "am" && hours === 12) {
    hours = 0;
  }
  // Add 2 hours to the time
  let berlinHours = (hours + 2) % 24;
  // Format the time in the 12-hour format
  const berlinMeridiem = berlinHours < 12 ? "am" : "pm";
  let berlinTime12Hour = `${
    berlinHours === 0 ? 12 : berlinHours > 12 ? berlinHours - 12 : berlinHours
  }:${minutes < 10 ? "0" : ""}${minutes}${berlinMeridiem}`;
  // Format the time in the 24-hour format
  let berlinTime24Hour = `${berlinHours < 10 ? "0" : ""}${berlinHours}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
  // Special case: Convert "12:00pm" to "12:00" in the 24-hour format
  if (berlinTime24Hour.endsWith("pm") && berlinHours === 12) {
    berlinTime24Hour = berlinTime24Hour.replace("pm", "");
  }
  return [berlinTime12Hour, berlinTime24Hour];
}

function getDayOfWeek(dateString) {
  //this function turns a date string into its weekday
  const [month, day, year] = dateString.split("-");
  const date = new Date(`${year}-${month}-${day}`);
  const options = { weekday: "long" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export default async function fetchThisWeek(request, response) {
  const fetchResponse = await fetch(
    "https://nfs.faireconomy.media/ff_calendar_thisweek.xml"
  );
  const xml = await fetchResponse.text();
  const json = await parseXML(xml);
  const events = json.weeklyevents.event.map((eventFromXML) => {
    // formatting the array to get rid of the nested arrays
    const event = {};
    for (const key in eventFromXML) {
      event[key] = eventFromXML[key][0];
    }
    const id = hash(event);
    event.id = id;
    event.flag = countryFlags[event.country];
    event.weekday = getDayOfWeek(event.date);
    event.alarm = false;

    const [berlinTime12Hour, berlinTime24Hour] = convertToBerlinTime(
      event.time
    );
    event.time = berlinTime12Hour;
    event.berlinTime = berlinTime24Hour;
    return event;
  });

  response.status(200).json(events);
}
