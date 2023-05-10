import styled from "styled-components";
import WeeklyCard from "../WeeklyCard";
import { uid } from "uid";
const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export default function WeeklyCards({ events }) {
  return (
    <>
      <h4>
        {events[0].weekday} {events[0].date}
      </h4>
      <StyledList>
        {events.map((event) => {
          return <WeeklyCard key={uid()} event={event}></WeeklyCard>;
        })}
      </StyledList>
    </>
  );
}
