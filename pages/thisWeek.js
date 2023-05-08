import WeeklyCards from "@/components/WeeklyCards";
import Link from "next/link";

export default function ThisWeek({ events }) {
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
    <div>
      <Link href={"/"}>View todays events</Link>
      <h1>This Week&#96;s Events</h1>
      <WeeklyCards events={weekdayEvents.monday}></WeeklyCards>
      <WeeklyCards events={weekdayEvents.tuesday}></WeeklyCards>
      <WeeklyCards events={weekdayEvents.wednesday}></WeeklyCards>
      <WeeklyCards events={weekdayEvents.thursday}></WeeklyCards>
      <WeeklyCards events={weekdayEvents.friday}></WeeklyCards>
    </div>
  );
}
