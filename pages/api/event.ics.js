import parseDateString from "@/components/utils/parseDateString";
import { createEvent } from "ics";

export default function handler(request, response) {
  if (request.method == "GET") {
    const { title, start, duration, description } = request.query;

    const startDateTime = parseDateString(start);
    const alarms = [
      {
        action: "audio",
        description: `5 min until ${title}`,
        trigger: { hours: 0, minutes: 5, before: true },
        repeat: 2,
        attachType: "VALUE=URI",
        attach: "Glass",
      },
      {
        action: "audio",
        description: `20 min until ${title}`,
        trigger: { hours: 0, minutes: 20, before: true },
        repeat: 2,
        attachType: "VALUE=URI",
        attach: "Glass",
      },
    ];
    const event = {
      title: `[Economic Calendar] ${title}`,
      start: [
        startDateTime.getFullYear(),
        startDateTime.getMonth() + 1,
        startDateTime.getDate(),
        startDateTime.getHours(),
        startDateTime.getMinutes(),
      ],
      duration: { minutes: Number.parseInt(duration, 10) },
      description,
      alarms,
    };

    const { error, value } = createEvent(event);
    if (error) {
      console.log(error);

      response.status(500).send("Internal Server Error");
      return;
    } else {
      response.setHeader("Content-Type", "text/calendar");
      response.status(200).send(value);
    }
  } else {
    response.status(405).text("Method Not Allowed");
  }
}
