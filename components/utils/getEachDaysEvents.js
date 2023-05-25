export default function getEachDaysEvents(events) {
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
