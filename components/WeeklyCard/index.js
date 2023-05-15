import Link from "next/link";
import styled from "styled-components";
const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr;
`;
const StyledListItem = styled.li`
  font-size: 0.6rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: lightslategray;
  }
`;
export default function WeeklyCard({ event }) {
  return (
    <StyledListItem>
      <StyledLink href={`/events/${event.id}`}>
        <p>{event.time}</p>
        <p>{event.title}</p>
        <p>
          {event.country}
          {event.flag}
        </p>
        <p>{event.impact}</p>
      </StyledLink>
    </StyledListItem>
  );
}
