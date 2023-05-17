import NavigationBar from "@/components/NavigationBar";
import TodaysCard from "@/components/TodaysCard";
import TodaysCards from "@/components/TodaysCards";
import WeeklyCard from "@/components/WeeklyCard";
import WeeklyCards from "@/components/WeeklyCards";
import { uid } from "uid";

export default function Alarms({ events, onToggleAlarm }) {
  console.log(events);
  const alarmEvents = events.filter((event) => event.alarm === true);
  return (
    <>
      {alarmEvents.length === 0 ? (
        <h1>No Alarms</h1>
      ) : (
        <WeeklyCards
          key={uid()}
          events={alarmEvents}
          onToggleAlarm={onToggleAlarm}
        ></WeeklyCards>
      )}
      <NavigationBar></NavigationBar>
    </>
  );
}
