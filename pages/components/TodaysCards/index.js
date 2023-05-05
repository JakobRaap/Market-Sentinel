import TodaysCard from "../TodaysCard";
import styled from "styled-components";

const StyledUl = styled.ul`
  padding: 30px;
`;

export default function TodaysCards({ events }) {
  return (
    <>
      <h1>Today&#96;s Events</h1>
      <StyledUl>
        {events.map((event) => {
          return <TodaysCard key={event.id} event={event}></TodaysCard>;
        })}
      </StyledUl>
    </>
  );
}
