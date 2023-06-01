import CalendarNavigationBar from "@/components/CalendarNavigationBar";
import { CenteredHeader2 } from "@/components/DisplaySettings/DisplaySettings.styled";
import { Placeholder } from "@/components/Placeholder/Placeholder.styled";
import {
  CenteredItemContainer,
  StyledDownloadButton,
} from "@/components/StyledDownloadButton/StyledDownloadButton.styled";

import { useRouter } from "next/router";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const StyledListItem = styled.li`
  margin: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default function EventDetails({ events, settings }) {
  const router = useRouter();
  const { id } = router.query;

  const event = events.find((event) => {
    return event.id === id;
  });

  if (!event) {
    return null;
  }
  const icsQuery = new URLSearchParams({
    title: `${(event.title, event.flag)}`,
    start: `${event.date} ${event.time}`,
    duration: settings.eventDuration,
    description: `Impact: ${event.impact}`,
    alarmTriggerA: settings.alarmTriggerA,
    alarmTriggerB: settings.alarmTriggerB,
  });

  return (
    <>
      <CalendarNavigationBar />
      <CenteredHeader2>{event.title}</CenteredHeader2>
      <StyledList>
        <StyledListItem>
          <span>Currency:</span> {event.country} {event.flag}
        </StyledListItem>
        <StyledListItem>
          <span>Date:</span> {event.weekday} {event.formattedDate}
        </StyledListItem>
        <StyledListItem>
          <span>Time:</span> {event.berlinTime}
        </StyledListItem>
        <StyledListItem>
          <span>Impact:</span> {event.impact}
        </StyledListItem>
        <StyledListItem>
          <span>Previous:</span> {event.previous ? event.previous : "unknown"}
        </StyledListItem>
        <StyledListItem>
          <span>Forecast:</span> {event.forecast ? event.forecast : "unknown"}
        </StyledListItem>
      </StyledList>
      <CenteredItemContainer>
        <a
          href={`/api/event.ics?${icsQuery.toString()}`}
          download={`${event.id}.ics`}
        >
          <StyledDownloadButton>Download Event</StyledDownloadButton>
        </a>
      </CenteredItemContainer>

      <Placeholder />
    </>
  );
}
