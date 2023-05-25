import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
const StyledListItem = styled.li`
  border: 1px solid black;
  margin: 2px;
  transition: background-color 0.2s;
  h1 {
    margin: 0;
  }
  h2 {
    font-size: 1rem;
    margin-left: 5px;
    font-weight: bold;
    margin: 0;
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

export default function TodaysCard({ event, onToggleAlarm }) {
  return (
    <>
      <StyledListItem>
        <StyledLink href={`/events/${event.id}`}>
          <h1>
            {event.country} {event.flag}
          </h1>
          <h2>{event.berlinTime}</h2>
          <p>{event.title}</p>

          <p>{event.impact}</p>
        </StyledLink>
        <Image
          onClick={() => onToggleAlarm(event.id)}
          alt="Alarmclock icon for toggling alarm on or off"
          className="alarm-icon"
          src={event.alarm ? "/alarm_toggled.png" : "/alarm_untoggled.png"}
          width={27}
          height={27}
        />
      </StyledListItem>
    </>
  );
}
