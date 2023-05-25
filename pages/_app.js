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
    },
  });

  const [allEvents, setAllEvents] = useState([]);
  const [newsEvents, setNewsEvents] = useState([]);
  const [alarmEvents, setAlarmEvents] = useLocalStorageState("events", {
    defaultValue: [],
  });
  const { data: events } = useSWR("/api/fetchThisWeek", fetcher);

  function handleFlagChechboxesToggle(setting, id) {
    if (setting === "flag") {
      const updatedSettings = settings;
      updatedSettings.countryFlags[id] = !updatedSettings.countryFlags[id];

      setSettings(updatedSettings);
    } else if (setting === "preferredCurrenciesToggle") {
      const updatedSettings = settings;
      updatedSettings.flagsTurnedOn = !updatedSettings.flagsTurnedOn;

      setSettings(updatedSettings);
    }
    console.warn(settings);
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
      setAllEvents(updatedEventsArray);
    }

    if (settings.flagsTurnedOn) {
      console.log(allEvents);
      const preferredCurrenciesOnly = allEvents.filter(
        (event) => settings.countryFlags[event.country]
      );
      setNewsEvents(preferredCurrenciesOnly);
    }
  }, [events, alarmEvents, settings]);

  // useEffect(() => {
  //   if (flagSettings.includes("FlagsTurnedOn")) {
  //     const PreferredCurrenciesOnly = allEvents.filter((event) =>
  //       flagSettings.includes(event.country)
  //     );
  //     setNewsEvents(PreferredCurrenciesOnly);
  //   } else if (!flagSettings.includes("FlagsTurnedOn")) {
  //     setNewsEvents(allEvents);
  //     console.log("triggered");
  //   }
  // }, [flagSettings]);

  function getEachDaysEvents(events) {
    const weekdayEvents = {};
    weekdayEvents.monday = events.filter((event) => {
      return event.weekday === "Monday";
    });
    weekdayEvents.tuesday = events.filter((event) => {
      return event.weekday === "Tuesday";
    });
    weekdayEvents.wednesday = events.filter((event) => {
      return event.weekday === "Wednesday";
    });
    weekdayEvents.thursday = events.filter((event) => {
      return event.weekday === "Thursday";
    });
    weekdayEvents.friday = events.filter((event) => {
      return event.weekday === "Friday";
    });

    return weekdayEvents;
  }

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
        events={newsEvents ?? []}
        onToggleAlarm={handleToggleAlarm}
        getEachDaysEvents={getEachDaysEvents}
        onChechboxesToggle={handleFlagChechboxesToggle}
        settings={settings}
      />
    </>
  );
}
