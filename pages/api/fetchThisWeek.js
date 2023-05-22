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

    return event;
  });

  response.status(200).json(events);
}
