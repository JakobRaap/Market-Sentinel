import { useEffect } from "react";

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function TimerComponent({ todaysEvents, onToggleAlarm }) {
  const alarmEvents = todaysEvents.filter((event) => event.alarm === true);

  function alarmVoiceMessage(eventNames) {
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[14];
    msg.volume = 1;
    msg.rate = 0.76;
    msg.text = `Attention - ${eventNames}  upcoming. Two minutes remaining. Prepare to exit any open positions.`;
    speechSynthesis.speak(msg);
  }
  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString("en", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      const matchingEvents = alarmEvents.filter(
        (event) => event.alarmTime === currentTime
      );
      if (matchingEvents.length > 0) {
        const eventIds = matchingEvents.map((event) => event.id);
        onToggleAlarm(eventIds);
        const eventNames = matchingEvents.map((event) => {
          return event.title + " for " + event.country;
        });

        alarmVoiceMessage(eventNames);
        toast.warn(eventNames.join(", ") + " in 2 minutes", {
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [alarmEvents]);

  return (
    <>
      <ToastContainer />
    </>
  );
}
