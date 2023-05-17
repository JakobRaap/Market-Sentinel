import CalendarNavigationBar from "@/components/CalendarNavigationBar";
import NavigationBar from "@/components/NavigationBar";
import WeeklyCards from "@/components/WeeklyCards";
import Link from "next/link";

export default function ThisWeek({ events, onToggleAlarm }) {
  //prevent the hydration error on refresh
  if (!events || events.length === 0) {
    return;
  }

  function getEachDaysEvents() {
    const weekdayEvents = {};
    weekdayEvents.monday = events.filter((event) => {
      return event.weekday === "Monday";
    });
    weekdayEvents.tuesday = events.filter((event) => {
      return event.weekday === "Tuesday";
    });
    weekdayEvents.wednesday = events.filter((event) => {
      return event.weekday === "Wednesday";
    });
    weekdayEvents.thursday = events.filter((event) => {
      return event.weekday === "Thursday";
    });
    weekdayEvents.friday = events.filter((event) => {
      return event.weekday === "Friday";
    });

    return weekdayEvents;
  }

  const weekdayEvents = getEachDaysEvents();

  return (
    <>
      <CalendarNavigationBar></CalendarNavigationBar>
      <h1>This Week&#96;s Events</h1>
      <WeeklyCards
        events={weekdayEvents.monday}
        onToggleAlarm={onToggleAlarm}
      ></WeeklyCards>
      <WeeklyCards
        events={weekdayEvents.tuesday}
        onToggleAlarm={onToggleAlarm}
      ></WeeklyCards>
      <WeeklyCards
        events={weekdayEvents.wednesday}
        onToggleAlarm={onToggleAlarm}
      ></WeeklyCards>
      <WeeklyCards
        events={weekdayEvents.thursday}
        onToggleAlarm={onToggleAlarm}
      ></WeeklyCards>
      <WeeklyCards
        events={weekdayEvents.friday}
        onToggleAlarm={onToggleAlarm}
      ></WeeklyCards>
      <NavigationBar></NavigationBar>
    </>
  );
}
