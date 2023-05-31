import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
const StyledListItem = styled.li`
  display: grid;
  grid-template-columns: 1.5fr 4fr 1.3fr 1fr 1fr;
  align-items: center;
  font-size: 0.6rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: rgba(211, 211, 211, 0.425);
  }
`;
export default function WeeklyCard({ event, onToggleAlarm, settings }) {
  return (
    <StyledListItem>
      <p>{event.berlinTime}</p>
      <StyledLink href={`/events/${event.id}`}>{event.title}</StyledLink>

      <p>
        {event.country}
        {event.flag}
      </p>
      {!settings.showRiskIcons ? (
        <p>{event.impact}</p>
      ) : (
        <>
          {event.impact === "Low" && (
            <Image
              alt="Low Risk Icon"
              src="/lowrisk.png"
              width={15}
              height={15}
            />
          )}
          {event.impact === "Medium" && (
            <Image
              alt="Medium Risk Icon"
              src="/mediumrisk.png"
              width={15}
              height={15}
            />
          )}
          {event.impact === "High" && (
            <Image
              alt="High Risk Icon"
              src="/highrisk.png"
              width={15}
              height={15}
            />
          )}
          {event.impact === "Holiday" && <p>🏝️</p>}
        </>
      )}

      <Image
        onClick={() => onToggleAlarm(event.id, true)}
        alt="img not found :("
        src={event.alarm ? "/alarm_toggled.png" : "/alarm_untoggled.png"}
        width={15}
        height={15}
      ></Image>
    </StyledListItem>
  );
}
