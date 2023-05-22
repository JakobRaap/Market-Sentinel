import NavigationBar from "@/components/NavigationBar";
import TodaysCard from "@/components/TodaysCard";
import TodaysCards from "@/components/TodaysCards";
import WeeklyCard from "@/components/WeeklyCard";
import WeeklyCards from "@/components/WeeklyCards";

export default function Alarms({ events, onToggleAlarm, getEachDaysEvents }) {
  const alarmEvents = events.filter((event) => event.alarm === true);
  const weekdayEvents = getEachDaysEvents(alarmEvents);

  return (
    <>
      {alarmEvents.length === 0 ? (
        <h1>No Alarms</h1>
      ) : (
        <>
          {weekdayEvents.monday.length > 0 && (
            <WeeklyCards
              events={weekdayEvents.monday}
              onToggleAlarm={onToggleAlarm}
            />
          )}
          {weekdayEvents.tuesday.length > 0 && (
            <WeeklyCards
              events={weekdayEvents.tuesday}
              onToggleAlarm={onToggleAlarm}
            />
          )}
          {weekdayEvents.wednesday.length > 0 && (
            <WeeklyCards
              events={weekdayEvents.wednesday}
              onToggleAlarm={onToggleAlarm}
            />
          )}
          {weekdayEvents.thursday.length > 0 && (
            <WeeklyCards
              events={weekdayEvents.thursday}
              onToggleAlarm={onToggleAlarm}
            />
          )}
          {weekdayEvents.friday.length > 0 && (
            <WeeklyCards
              events={weekdayEvents.friday}
              onToggleAlarm={onToggleAlarm}
            />
          )}
        </>
      )}
      <NavigationBar />
    </>
  );
}
