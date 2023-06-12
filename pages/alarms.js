import { CenteredHeader1 } from "@/components/DisplaySettings/DisplaySettings.styled";
import NavigationBar from "@/components/NavigationBar";
import { Placeholder } from "@/components/Placeholder/Placeholder.styled";
import {
  CenteredItemContainer,
  StyledDownloadButton,
} from "@/components/StyledDownloadButton/StyledDownloadButton.styled";
import WeeklyCards from "@/components/WeeklyCards";
import getEachDaysEvents from "@/components/utils/getEachDaysEvents";

export default function Alarms({ events, onToggleAlarm, settings }) {
  const alarmEvents = events.filter((event) => event.alarm === true);
  const weekdayEvents = getEachDaysEvents(alarmEvents);
  const icsQuery = new URLSearchParams({
    events: JSON.stringify(alarmEvents),
    settings: JSON.stringify(settings),
  });

  return (
    <>
      {alarmEvents.length === 0 ? (
        <CenteredHeader1>No Alarms</CenteredHeader1>
      ) : (
        <>
          <CenteredHeader1>Toggled Events</CenteredHeader1>{" "}
          {weekdayEvents.monday.length > 0 && (
            <WeeklyCards
              events={weekdayEvents.monday}
              onToggleAlarm={onToggleAlarm}
              settings={settings}
            />
          )}
          {weekdayEvents.tuesday.length > 0 && (
            <WeeklyCards
              events={weekdayEvents.tuesday}
              onToggleAlarm={onToggleAlarm}
              settings={settings}
            />
          )}
          {weekdayEvents.wednesday.length > 0 && (
            <WeeklyCards
              events={weekdayEvents.wednesday}
              onToggleAlarm={onToggleAlarm}
              settings={settings}
            />
          )}
          {weekdayEvents.thursday.length > 0 && (
            <WeeklyCards
              events={weekdayEvents.thursday}
              onToggleAlarm={onToggleAlarm}
              settings={settings}
            />
          )}
          {weekdayEvents.friday.length > 0 && (
            <WeeklyCards
              events={weekdayEvents.friday}
              onToggleAlarm={onToggleAlarm}
              settings={settings}
            />
          )}
          <CenteredItemContainer>
            {" "}
            <a
              href={`/api/events.ics?${icsQuery.toString()}`}
              download={`EconCalendarEvents.ics`}
            >
              <StyledDownloadButton>Download Events</StyledDownloadButton>
            </a>
          </CenteredItemContainer>
        </>
      )}

      <Placeholder />
    </>
  );
}
