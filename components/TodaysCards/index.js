import { uid } from "uid";
import TodaysCard from "../TodaysCard";
import styled from "styled-components";

const StyledList = styled.ul`
  padding: 30px;
  list-style: none;
`;

export default function TodaysCards({ events, onToggleAlarm }) {
  return (
    <StyledList>
      {events.map((event) => {
        return (
          <TodaysCard
            key={uid()}
            event={event}
            onToggleAlarm={onToggleAlarm}
          ></TodaysCard>
        );
      })}
    </StyledList>
  );
}
