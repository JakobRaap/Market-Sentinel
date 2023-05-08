import WeeklyCards from "@/components/WeeklyCards";
import Link from "next/link";
import { useState } from "react";

export default function ThisWeek({ events }) {
  function getWeekdaysEvents() {
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

  const mondayDate = "00-00-0000";
  const weekdayEvents = getWeekdaysEvents();
  // if (weekdayEvents.monday.length > 0) {
  //   console.log(weekdayEvents.monday[0].date);
  // }
  console.warn(events);
  return (
    <div>
      <Link href={"/"}>View todays events</Link>
      <h1>This Week&#96;s Events</h1>
      <h3>Monday {mondayDate}</h3>

      <WeeklyCards events={weekdayEvents.monday}></WeeklyCards>
      <h3>Tuesday</h3>
      <WeeklyCards events={weekdayEvents.tuesday}></WeeklyCards>
      <h3>Wednesday</h3>
      <WeeklyCards events={weekdayEvents.wednesday}></WeeklyCards>
      <h3>Thursday</h3>
      <WeeklyCards events={weekdayEvents.thursday}></WeeklyCards>
      <h3>Friday</h3>
      <WeeklyCards events={weekdayEvents.friday}></WeeklyCards>
    </div>
  );
}
