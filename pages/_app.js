import { useEffect } from "react";
import GlobalStyle from "../styles";
import { useState } from "react";
const xml2js = require("xml2js");
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
async function parseXML(xml) {
  const parser = new xml2js.Parser();
  const json = await parser.parseStringPromise(xml);
  return json;
}
function getDayOfWeek(dateString) {
  //this function turns a date string into its weekday
  const [month, day, year] = dateString.split("-");
  const date = new Date(`${year}-${month}-${day}`);
  const options = { weekday: "long" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

async function fetchThisWeekAndReturnArray() {
  const res = await fetch("/api/fetchThisWeek", {
    method: "POST",
  });
  const data = await res.json();
  const formatedArray = await parseXML(data)
    .then((json) => {
      //formatting the array to get rid of the nested arrays
      const oldArray = json.weeklyevents.event;
      const newArray = oldArray.map((obj) => {
        const newObject = {};
        for (const key in obj) {
          newObject[key] = obj[key][0];
        }
        return newObject;
      });
      return newArray;
    })
    .catch((err) => {
      console.error(err);
    });
  return formatedArray;
}

function addCountryFlags(events) {
  const updatedEvents = events.map((event) => {
    return { ...event, flag: countryFlags[event.country] };
  });
  return updatedEvents;
}

export default function App({ Component, pageProps }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchThisWeekAndReturnArray().then((data) => {
      //Add weekday and country flag to each event
      const eventsWithWeekdays = data.map((event) => {
        event.weekday = getDayOfWeek(event.date);
        return event;
      });
      const eventsWithFlags = addCountryFlags(eventsWithWeekdays);
      setEvents(eventsWithFlags);
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} events={events} />
    </>
  );
}
