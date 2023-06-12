import useSWR from "swr";
import GlobalStyle from "../styles";
import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import AlarmTimer from "@/components/AlarmTimer";
import useSound from "use-sound";
import NavigationBar from "@/components/NavigationBar";
const fetcher = (url) => fetch(url).then((res) => res.json());

const soundUrl = "./alarmtogglesound.mp3";
export default function App({ Component, pageProps }) {
  const [settings, setSettings] = useLocalStorageState("settings", {
    defaultValue: {
      countryFlags: {
        USD: true,
        EUR: true,
        GBP: true,
        AUD: false,
        CAD: false,
        NZD: false,
        CHF: false,
        JPY: false,
        CNY: false,
      },
      flagsTurnedOn: false,
      alarmTriggerA: 5,
      alarmTriggerB: 20,
      eventDuration: 30,
      impactLow: true,
      impactMedium: true,
      impactHigh: true,
      bankHolidays: true,
      showRiskIcons: true,
    },
  });

  const [newsEvents, setNewsEvents] = useState([]);
  const [alarmEvents, setAlarmEvents] = useLocalStorageState("events", {
    defaultValue: [],
  });
  const { data: events } = useSWR("/api/fetchThisWeek", fetcher);
  const [playToggleSound] = useSound(soundUrl);
  function changeSettings(setting, value) {
    const updatedSettings = { ...settings };

    if (setting === "flag") {
      updatedSettings.countryFlags[value] =
        !updatedSettings.countryFlags[value];
    } else if (setting === "preferredCurrenciesToggle") {
      updatedSettings.flagsTurnedOn = !updatedSettings.flagsTurnedOn;
    } else if (setting === "alarmTriggerA") {
      updatedSettings.alarmTriggerA = value;
    } else if (setting === "alarmTriggerB") {
      updatedSettings.alarmTriggerB = value;
    } else if (setting === "eventDuration") {
      updatedSettings.eventDuration = value;
    } else if (setting === "impactLow") {
      updatedSettings.impactLow = !updatedSettings.impactLow;
    } else if (setting === "impactMedium") {
      updatedSettings.impactMedium = !updatedSettings.impactMedium;
    } else if (setting === "impactHigh") {
      updatedSettings.impactHigh = !updatedSettings.impactHigh;
    } else if (setting === "bankHolidays") {
      updatedSettings.bankHolidays = !updatedSettings.bankHolidays;
    } else if (setting === "showRiskIcons") {
      updatedSettings.showRiskIcons = !updatedSettings.showRiskIcons;
    }

    setSettings(updatedSettings);
  }

  function filterTodaysEvents(events) {
    if (events) {
      const today = new Date();
      return events.filter((event) => {
        const eventDate = new Date(event.dateObjectString);
        return (
          eventDate.getDate() === today.getDate() &&
          eventDate.getMonth() === today.getMonth() &&
          eventDate.getFullYear() === today.getFullYear()
        );
      });
    }
  }

  useEffect(() => {
    if (events) {
      const updatedEventsArray = events.map((event) => {
        event.dateObject = new Date(event.dateObjectString);
        const updatedEvent = alarmEvents.find((alarm) => alarm.id === event.id);
        if (updatedEvent) {
          return { ...event, alarm: updatedEvent.alarm };
        }
        return event;
      });
      setNewsEvents(updatedEventsArray);
    }
  }, [events]);

  const eventsToShow = newsEvents.filter((event) => {
    const { impact, country } = event;
    if (impact === "holiday") {
      return true;
    } else if (
      (impact === "Low" && settings.impactLow) ||
      (impact === "Medium" && settings.impactMedium) ||
      (impact === "High" && settings.impactHigh) ||
      (impact === "Holiday" && settings.bankHolidays)
    ) {
      return settings.flagsTurnedOn ? settings.countryFlags[country] : true;
    }
    return false;
  });

  function handleToggleAlarm(ids, togglesound = false) {
    const updatedEvents = newsEvents.map((event) => {
      if (ids.includes(event.id)) {
        return { ...event, alarm: !event.alarm };
      }
      return event;
    });
    togglesound && playToggleSound();
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
        todaysEvents={filterTodaysEvents(eventsToShow)}
      />
      <AlarmTimer
        onToggleAlarm={handleToggleAlarm}
        todaysEvents={filterTodaysEvents(eventsToShow)}
      />
      <NavigationBar />
    </>
  );
}
