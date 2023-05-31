import styled from "styled-components";
import WeeklyCard from "../WeeklyCard";
const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 0;
  list-style: none;
`;
const StyledDateHeading = styled.h4`
  padding-left: 20px;
`;

export default function WeeklyCards({
  events,
  onToggleAlarm,
  showWeekDay,
  settings,
}) {
  return (
    <>
      <StyledDateHeading>{events[0].weekday}</StyledDateHeading>
      <StyledList>
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
      </StyledList>
    </>
  );
}
