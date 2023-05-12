import Link from "next/link";
import styled from "styled-components";
const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
const StyledListItem = styled.li`
  font-size: 0.6rem;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr;
  transition: 0.2s ease;
  &:hover {
    background-color: lightslategray;
  }
`;
export default function WeeklyCard({ event }) {
  return (
    <StyledLink href={`/events/${event.id}`}>
      <StyledListItem>
        <p>{event.time}</p>
        <p>{event.title}</p>
        <p>
          {event.country}
          {event.flag}
        </p>
        <p>{event.impact}</p>
      </StyledListItem>
    </StyledLink>
  );
}
