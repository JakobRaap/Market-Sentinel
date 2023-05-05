import { useEffect } from "react";
import GlobalStyle from "../styles";
import { useState } from "react";
const xml2js = require("xml2js");

async function parseXML(xml) {
  const parser = new xml2js.Parser();
  const json = await parser.parseStringPromise(xml);
  return json;
}

async function fetchThisWeekAndReturnArray() {
  const res = await fetch("/api/fetchThisWeek", {
    method: "POST",
  });
  const data = await res.json();
  const formatedArray = await parseXML(data)
    .then((json) => {
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
      setEvents(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} events={events} />
    </>
  );
}
