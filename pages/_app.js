import { useEffect } from "react";
import GlobalStyle from "../styles";
import { useState } from "react";
const xml2js = require("xml2js");
const startingData = [
  {
    country: "AUD",
    date: "05-08-2023",
    forecast: "3.0%",
    impact: "Low",
    previous: "4.0%",
    time: "1:30am",
    title: "Building Approvals m/m",
    weekday: "Monday",
  },
  {
    country: "AUD",
    date: "05-09-2023",
    forecast: "3.0%",
    impact: "Low",
    previous: "4.0%",
    time: "1:30am",
    title: "Building Approvals m/m",
    weekday: "Monday",
  },
  {
    country: "AUD",
    date: "05-10-2023",
    forecast: "3.0%",
    impact: "Low",
    previous: "4.0%",
    time: "1:30am",
    title: "Building Approvals m/m",
    weekday: "Monday",
  },
  {
    country: "AUD",
    date: "05-11-2023",
    forecast: "3.0%",
    impact: "Low",
    previous: "4.0%",
    time: "1:30am",
    title: "Building Approvals m/m",
    weekday: "Monday",
  },
  {
    country: "AUD",
    date: "05-12-2023",
    forecast: "3.0%",
    impact: "Low",
    previous: "4.0%",
    time: "1:30am",
    title: "Building Approvals m/m",
    weekday: "Monday",
  },
];
async function parseXML(xml) {
  const parser = new xml2js.Parser();
  const json = await parser.parseStringPromise(xml);
  return json;
}
function getDayOfWeek(dateString) {
  //formatting date from mm-dd-yyyy to yyyy-mm-dd
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

export default function App({ Component, pageProps }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchThisWeekAndReturnArray().then((data) => {
      //Add weekday to each event
      const eventsWithWeekdays = data.map((event) => {
        event.weekday = getDayOfWeek(event.date);
        return event;
      });
      console.log(eventsWithWeekdays);
      setEvents(eventsWithWeekdays);
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} events={events} />
    </>
  );
}
