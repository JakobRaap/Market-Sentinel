import Link from "next/link";
import styled from "styled-components";
import { uid } from "uid";

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
const StyledListItem = styled.li`
  border: 1px solid black;
  margin: 2px;
  transition: background-color 0.2s;
  h2 {
    font-size: 1rem;
    margin-left: 5px;
    font-weight: bold;

    text-transform: uppercase;
  }
  p {
    font-size: 0.8rem;
    text-transform: uppercase;
    margin: 2px;
    margin-left: 8px;
  }
  &:hover {
    background-color: lightslategray;
  }
`;

export default function TodaysCard({ event }) {
  return (
    <>
      <StyledListItem>
        <StyledLink href={`/events/${event.id}`}>
          <h2>{event.title}</h2>

          <p>{event.time}</p>
          <p>
            {event.country} {event.flag}
          </p>
          <p>{event.impact}</p>
        </StyledLink>
      </StyledListItem>
    </>
  );
}
