import CalendarNavigationBar from "@/components/CalendarNavigationBar";
import NavigationBar from "@/components/NavigationBar";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const StyledListItem = styled.li`
  text-align: center;
  margin: 45px;
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
      <h2>{event.title}</h2>
      <StyledList>
        <StyledListItem>
          Currency: {event.country} {event.flag}
        </StyledListItem>
        <StyledListItem>
          Date: {event.weekday} {event.date}
        </StyledListItem>
        <StyledListItem>Time: {event.time}</StyledListItem>
        <StyledListItem>Impact: {event.impact}</StyledListItem>
        <StyledListItem>
          Previous: {event.previous ? event.previous : "unknown"}
        </StyledListItem>
        <StyledListItem>
          Forecast: {event.forecast ? event.forecast : "unknown"}
        </StyledListItem>
        <StyledListItem>
          <a
            href={`/api/event.ics?${icsQuery.toString()}`}
            download={`${event.id}.ics`}
          >
            Add to Calendar
          </a>
        </StyledListItem>
      </StyledList>
      <NavigationBar />
    </>
  );
}
