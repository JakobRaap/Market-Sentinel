import { createEvents } from "ics";

function parseDateString(dateString) {
  const parts = dateString.split(" ");
  const dateParts = parts[0].split("-");
  const month = parseInt(dateParts[0], 10) - 1;
  const day = parseInt(dateParts[1], 10);
  const year = parseInt(dateParts[2], 10);
  const timeParts = parts[1].toLowerCase().split(":");
  let hours = parseInt(timeParts[0], 10);
  const minutes = parseInt(timeParts[1], 10);
  if (parts[2] === "pm") {
    hours += 12;
  }
  return new Date(year, month, day, hours, minutes);
}

export default function handler(request, response) {
  if (request.method == "GET") {
    const events = JSON.parse(request.query.events);
    const icsEvents = events.map((event) => {
      const title = `[Economic Calendar] ${event.title} ${event.flag}`;
      const start = `${event.date} ${event.time}`;
      const duration = 30;
      const description = `Impact: ${event.impact}`;
      let alarms = [
        {
          action: "audio",
          description: `5 min until ${event.title}`,
          trigger: { hours: 0, minutes: 5, before: true },
          repeat: 2,
          attachType: "VALUE=URI",
          attach: "Glass",
        },
        {
          action: "audio",
          description: `20 min until ${event.title}`,
          trigger: { hours: 0, minutes: 20, before: true },
          repeat: 2,
          attachType: "VALUE=URI",
          attach: "Glass",
        },
      ];
      const startDateTime = parseDateString(start);
      return {
        title,
        start: [
          startDateTime.getFullYear(),
          startDateTime.getMonth() + 1,
          startDateTime.getDate(),
          startDateTime.getHours(),
          startDateTime.getMinutes(),
        ],
        duration: { minutes: Number.parseInt(duration, 10) },
        description,
        alarms: alarms,
      };
    });

    const { error, value } = createEvents(icsEvents);
    if (error) {
      console.log(error);

      response.status(500).send("Internal Server Error");
    } else {
      response.setHeader("Content-Type", "text/calendar");
      response.status(200).send(value);
    }
  } else {
    response.status(405).text("Method Not Allowed");
  }
}
