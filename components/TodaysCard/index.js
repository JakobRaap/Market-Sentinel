import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { StyledLink, StyledListItem } from "./TodaysCard.styled";

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
