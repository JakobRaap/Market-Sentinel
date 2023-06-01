import Image from "next/image";

import {
  StyledLink,
  StyledListItem,
  TodaysCardEventTitlePTag,
  TodaysCardImpactPTag,
  TodaysCardInfoContainer,
  TodaysCardUpperContainer,
} from "./TodaysCard.styled";

export default function TodaysCard({ event, onToggleAlarm, settings }) {
  return (
    <>
      <StyledListItem>
        <StyledLink href={`/events/${event.id}`}>
          <TodaysCardUpperContainer>
            <h1>
              {event.country} {event.flag}
            </h1>
            {!settings.showRiskIcons ? (
              <TodaysCardImpactPTag>{event.impact}</TodaysCardImpactPTag>
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
          </TodaysCardUpperContainer>

          <TodaysCardEventTitlePTag>{event.title}</TodaysCardEventTitlePTag>
        </StyledLink>
        <TodaysCardInfoContainer>
          <h2>{event.berlinTime}</h2>
          <Image
            onClick={() => onToggleAlarm(event.id, true)}
            alt="Alarmclock icon for toggling alarm on or off"
            className="alarm-icon"
            src={
              event.alarm
                ? "/alarmToggledDarkmode.png"
                : "/alarmToggledDarkmode.png"
            }
            width={27}
            height={27}
          />
        </TodaysCardInfoContainer>
      </StyledListItem>
    </>
  );
}
