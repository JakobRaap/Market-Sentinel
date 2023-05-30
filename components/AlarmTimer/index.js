import { useEffect } from "react";
import useSound from "use-sound";
const soundUrl = "./alarm.wav";

export default function TimerComponent({ todaysEvents, onToggleAlarm }) {
  const alarmEvents = todaysEvents.filter((event) => event.alarm === true);
  const [play] = useSound(soundUrl);

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString("en", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      const matchingEvents = alarmEvents.filter(
        (event) => event.berlinTime === currentTime
      );

      if (matchingEvents.length > 0) {
        play();

        const eventIds = matchingEvents.map((event) => event.id);
        onToggleAlarm(eventIds);

        const eventNames = matchingEvents.map((event) => {
          return event.title;
        });
        console.error(eventNames.join(", ") + " in 2 minutes");
      }
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [alarmEvents]);

  return;
}
