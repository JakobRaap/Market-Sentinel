import { useRouter } from "next/router";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const StyledListItem = styled.li`
  text-align: center;
  margin: 60px;
`;

export default function EventDetails({ events }) {
  const router = useRouter();
  const { id } = router.query;

  const event = events.find((event) => {
    return event.id === id;
  });

  if (!event) {
    return null;
  }

  return (
    <>
      <button onClick={() => router.back()}>🔙</button>
      <h2>{event.title}</h2>
      <StyledList>
        <StyledListItem>
          Currency: {event.country} {event.flag}
        </StyledListItem>
        <StyledListItem>
          Date: {event.weekday} {event.date}
        </StyledListItem>
        <StyledListItem>Time: {event.time}</StyledListItem>
        <StyledListItem>Impact: {event.impact}</StyledListItem>
        <StyledListItem>
          Previous: {event.previous ? event.previous : "unknown"}
        </StyledListItem>
        <StyledListItem>
          Forecast: {event.forecast ? event.forecast : "unknown"}
        </StyledListItem>
      </StyledList>
    </>
  );
}
