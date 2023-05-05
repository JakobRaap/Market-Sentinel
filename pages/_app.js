import { useEffect } from "react";
import GlobalStyle from "../styles";
import { useState } from "react";
const xml2js = require("xml2js");
async function fetchThisWeek() {
  const res = await fetch("/api/fetchThisWeek", {
    method: "POST",
  });
  const data = await res.json();
  return data;
}

function getMondayAndFriday() {
  const now = new Date();
  const monday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - now.getDay() + 1,
    5,
    0,
    0
  );
  const friday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - now.getDay() + 5,
    23,
    30,
    0
  );
  const mondayTimestamp = monday.getTime();
  const fridayTimestamp = friday.getTime();
  return [mondayTimestamp, fridayTimestamp];
}
const [mondayTimestamp, fridayTimestamp] = getMondayAndFriday();

async function fetchThisWeeksEvents() {
  const url = `https://economiccalendar.p.rapidapi.com/events/${mondayTimestamp}/${fridayTimestamp}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "29b57b3c4cmsh3b2b2a69aaf44bfp19c91fjsne9ed60e78907",
      "X-RapidAPI-Host": "economiccalendar.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    const jsonData = JSON.parse(result);
    const events = jsonData[0].events;
    console.log(events);
    return events;
  } catch (error) {
    console.error(error);
  }
}

export default function App({ Component, pageProps }) {
  const [events, setEvents] = useState([]);
  // useEffect(() => {
  //   fetchThisWeeksEvents().then((data) => {
  //     setEvents(data);
  //   });
  // }, []);
  // console.log(mondayTimestamp, fridayTimestamp);

  const xml2js = require("xml2js");

  async function parseXML(xml) {
    const parser = new xml2js.Parser();
    const json = await parser.parseStringPromise(xml);
    return json;
  }

  fetchThisWeek().then((xml) => {
    parseXML(xml)
      .then((json) => {
        const oldArray = json.weeklyevents.event;
        const newArray = oldArray.map((obj) => {
          const newObject = {};
          for (const key in obj) {
            newObject[key] = obj[key][0];
          }
          return newObject;
        });

        console.log(newArray);
      })
      .catch((err) => {
        console.error(err);
      });
  });
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} events={events} />
    </>
  );
}
