import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
const StyledListItem = styled.li`
  border: 2px solid black;
  margin: 2px;
  margin-bottom: 10px;
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
    background-color: rgba(211, 211, 211, 0.425);
  }
`;

export default function TodaysCard({ event, onToggleAlarm, settings }) {
  return (
    <>
      <StyledListItem>
        <StyledLink href={`/events/${event.id}`}>
          <h1>
            {event.country} {event.flag}
          </h1>
          <h2>{event.berlinTime}</h2>
          <p>{event.title}</p>

          {!settings.showRiskIcons ? (
            <p>{event.impact}</p>
          ) : (
            <>
              {event.impact === "Low" && (
                <Image
                  alt="Low Risk Icon"
                  src="/lowrisk.png"
                  width={27}
                  height={27}
                />
              )}
              {event.impact === "Medium" && (
                <Image
                  alt="Medium Risk Icon"
                  src="/mediumrisk.png"
                  width={27}
                  height={27}
                />
              )}
              {event.impact === "High" && (
                <Image
                  alt="High Risk Icon"
                  src="/highrisk.png"
                  width={27}
                  height={27}
                />
              )}
              {event.impact === "Holiday" && <p>🏝️</p>}
            </>
          )}
        </StyledLink>
        <Image
          onClick={() => onToggleAlarm(event.id, true)}
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
