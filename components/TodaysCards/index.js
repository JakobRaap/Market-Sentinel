import { Placeholder } from "../Placeholder/Placeholder.styled";
import TodaysCard from "../TodaysCard";
import styled from "styled-components";

const StyledList = styled.ul`
  padding: 30px;
  list-style: none;
`;

export default function TodaysCards({ events, onToggleAlarm, settings }) {
  return (
    <>
      <StyledList>
        {events.length === 0 ? (
          <h1>No events for today</h1>
        ) : (
          events.map((event) => {
            return (
              <TodaysCard
                key={event.id}
                event={event}
                onToggleAlarm={onToggleAlarm}
                settings={settings}
              />
            );
          })
        )}
      </StyledList>
      <Placeholder />
    </>
  );
}
