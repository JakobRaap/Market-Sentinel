import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
const StyledListItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr 1fr;
  align-items: center;
  font-size: 0.6rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: lightslategray;
  }
`;
export default function WeeklyCard({ event, onToggleAlarm }) {
  return (
    <StyledListItem>
      <p>{event.time}</p>
      <StyledLink href={`/events/${event.id}`}>{event.title}</StyledLink>

      <p>
        {event.country}
        {event.flag}
      </p>
      <p>{event.impact}</p>

      <Image
        onClick={() => onToggleAlarm(event.id)}
        alt="img not found :("
        src={event.alarm ? "/alarm_toggled.png" : "/alarm_untoggled.png"}
        width={15}
        height={15}
      ></Image>
    </StyledListItem>
  );
}
