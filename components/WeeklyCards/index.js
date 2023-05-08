import styled from "styled-components";
import WeeklyCard from "../WeeklyCard";
import { uid } from "uid";
const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 3%;
`;

export default function WeeklyCards({ events }) {
  return (
    <StyledUl>
      {events.map((event) => {
        return <WeeklyCard key={uid()} event={event}></WeeklyCard>;
      })}
    </StyledUl>
  );
}
