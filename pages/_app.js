import useSWR from "swr";
import GlobalStyle from "../styles";
import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [settings, setSettings] = useLocalStorageState("settings", {
    defaultValue: {
      countryFlags: {
        USD: true,
        EUR: true,
        GBP: true,
        AUD: true,
        CAD: true,
        NZD: true,
        CHF: true,
        JPY: true,
        CNY: true,
      },
      flagsTurnedOn: false,
      alarmTriggerA: 5,
      alarmTriggerB: 20,
      eventDuration: 30,
      impactLow: true,
      impactMedium: true,
      impactHigh: true,
    },
  });

  const [newsEvents, setNewsEvents] = useState([]);
  const [alarmEvents, setAlarmEvents] = useLocalStorageState("events", {
    defaultValue: [],
  });
  const { data: events } = useSWR("/api/fetchThisWeek", fetcher);

  function changeSettings(setting, value) {
    if (setting === "flag") {
      const updatedSettings = settings;
      updatedSettings.countryFlags[value] =
        !updatedSettings.countryFlags[value];
      setSettings(updatedSettings);
    } else if (setting === "preferredCurrenciesToggle") {
      const updatedSettings = settings;
      updatedSettings.flagsTurnedOn = !updatedSettings.flagsTurnedOn;
      setSettings(updatedSettings);
    } else if (setting === "alarmTriggerA") {
      const updatedSettings = settings;
      updatedSettings.alarmTriggerA = value;
      setSettings(updatedSettings);
    } else if (setting === "alarmTriggerB") {
      const updatedSettings = settings;
      updatedSettings.alarmTriggerB = value;
      setSettings(updatedSettings);
    } else if (setting === "eventDuration") {
      const updatedSettings = settings;
      updatedSettings.eventDuration = value;
      setSettings(updatedSettings);
    } else if (setting === "impactLow") {
      const updatedSettings = settings;
      updatedSettings.impactLow = !updatedSettings.impactLow;
      setSettings(updatedSettings);
    } else if (setting === "impactMedium") {
      const updatedSettings = settings;
      updatedSettings.impactMedium = !updatedSettings.impactMedium;
      setSettings(updatedSettings);
    } else if (setting === "impactHigh") {
      const updatedSettings = settings;
      updatedSettings.impactHigh = !updatedSettings.impactHigh;
      setSettings(updatedSettings);
    }
  }

  useEffect(() => {
    // update events array with alarm info
    if (events) {
      const updatedEventsArray = events.map((event) => {
        const updatedEvent = alarmEvents.find((alarm) => alarm.id === event.id);
        if (updatedEvent) {
          return { ...event, alarm: updatedEvent.alarm };
        }
        return event;
      });
      setNewsEvents(updatedEventsArray);
    }
  }, [events, alarmEvents, settings]);

  const eventsToShow = newsEvents.filter((event) => {
    const { impact, country } = event;
    if (impact === "holiday") {
      return true;
    } else if (
      (impact === "Low" && settings.impactLow) ||
      (impact === "Medium" && settings.impactMedium) ||
      (impact === "High" && settings.impactHigh)
    ) {
      return settings.flagsTurnedOn ? settings.countryFlags[country] : true;
    }
    return false;
  });

  function handleToggleAlarm(id) {
    const updatedEvents = newsEvents.map((event) => {
      if (event.id === id) {
        return { ...event, alarm: !event.alarm };
      }
      return event;
    });
    setAlarmEvents(updatedEvents);
    setNewsEvents(updatedEvents);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        events={eventsToShow ?? []}
        onToggleAlarm={handleToggleAlarm}
        changeSettings={changeSettings}
        settings={settings}
      />
    </>
  );
}
