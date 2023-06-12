import WeeklyCard from "../WeeklyCard";
import {
  ThisWeekStyledDateHeading,
  ThisWeekStyledList,
} from "./WeeklyCards.styled";

export default function WeeklyCards({
  events,
  onToggleAlarm,
  showWeekDay,
  settings,
}) {
  return (
    <>
      <ThisWeekStyledDateHeading>{events[0].weekday}</ThisWeekStyledDateHeading>
      <ThisWeekStyledList>
        {events.map((event) => {
          return (
            <WeeklyCard
              key={event.id}
              event={event}
              onToggleAlarm={onToggleAlarm}
              showWeekDay={showWeekDay}
              settings={settings}
            ></WeeklyCard>
          );
        })}
      </ThisWeekStyledList>
    </>
  );
}
