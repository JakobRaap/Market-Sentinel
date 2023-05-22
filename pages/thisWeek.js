import CalendarNavigationBar from "@/components/CalendarNavigationBar";
import NavigationBar from "@/components/NavigationBar";
import WeeklyCards from "@/components/WeeklyCards";
import Link from "next/link";

export default function ThisWeek({ events, onToggleAlarm, getEachDaysEvents }) {
  //prevent the hydration error on refresh
  if (!events || events.length === 0) {
    return;
  }

  const weekdayEvents = getEachDaysEvents(events);

  return (
    <>
      <CalendarNavigationBar page="thisWeek" />
      <h1>This Week&#96;s Events</h1>
      <WeeklyCards
        events={weekdayEvents.monday}
        onToggleAlarm={onToggleAlarm}
      />
      <WeeklyCards
        events={weekdayEvents.tuesday}
        onToggleAlarm={onToggleAlarm}
      />
      <WeeklyCards
        events={weekdayEvents.wednesday}
        onToggleAlarm={onToggleAlarm}
      />
      <WeeklyCards
        events={weekdayEvents.thursday}
        onToggleAlarm={onToggleAlarm}
      />
      <WeeklyCards
        events={weekdayEvents.friday}
        onToggleAlarm={onToggleAlarm}
      />
      <NavigationBar />
    </>
  );
}
