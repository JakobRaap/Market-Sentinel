import CalendarNavigationBar from "@/components/CalendarNavigationBar";
import NavigationBar from "@/components/NavigationBar";
import WeeklyCards from "@/components/WeeklyCards";
import getEachDaysEvents from "@/components/utils/getEachDaysEvents";

export default function ThisWeek({ events, onToggleAlarm }) {
  const weekdayEvents = getEachDaysEvents(events);
  return (
    <>
      <CalendarNavigationBar page="thisWeek" />
      {!events || events.length === 0 ? (
        <h1>No events this week</h1>
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
