import parseDateString from "@/components/utils/parseDateString";
import { createEvents } from "ics";

export default function handler(request, response) {
  if (request.method == "GET") {
    const events = JSON.parse(request.query.events);
    const settings = JSON.parse(request.query.settings);
    const icsEvents = events.map((event) => {
      const title = `${event.title} ${event.flag}`;
      const start = `${event.date} ${event.time}`;
      const duration = settings.eventDuration;
      const description = `Impact: ${event.impact}`;
      const alarms = [
        {
          action: "audio",
          description: `${settings.alarmTriggerA} min until ${event.title}`,
          trigger: { hours: 0, minutes: settings.alarmTriggerA, before: true },
          repeat: 2,
          attachType: "VALUE=URI",
          attach: "Glass",
        },
        {
          action: "audio",
          description: `${settings.alarmTriggerB} min until ${event.title}`,
          trigger: { hours: 0, minutes: settings.alarmTriggerB, before: true },
          repeat: 2,
          attachType: "VALUE=URI",
          attach: "Glass",
        },
      ];

      const startDateTime = parseDateString(start);
      return {
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
    });

    const { error, value } = createEvents(icsEvents);
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
