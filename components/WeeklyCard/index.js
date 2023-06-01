import Image from "next/image";
import { StyledLink } from "../TodaysCard/TodaysCard.styled";
import { WeeklyCardStyledListItem } from "./WeeklyCard.styled";

export default function WeeklyCard({ event, onToggleAlarm, settings }) {
  return (
    <WeeklyCardStyledListItem>
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
        src={
          event.alarm
            ? "/alarmToggledDarkmode.png"
            : "/alarmUnToggledDarkmode.png"
        }
        width={15}
        height={15}
      ></Image>
    </WeeklyCardStyledListItem>
  );
}
