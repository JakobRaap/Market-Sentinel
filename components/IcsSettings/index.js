import { SettingsHeader } from "../DisplaySettings/DisplaySettings.styled";
import {
  IcsSettingsContainer,
  StyledIcsNumberInput,
} from "./IcsSettings.styled";

export default function IcsSettings({ settings, changeSettings }) {
  return (
    <>
      <SettingsHeader>Calendar Event Settings</SettingsHeader>
      <IcsSettingsContainer>
        <label htmlFor="firstWarning">First warning</label>
        <StyledIcsNumberInput
          id="firstWarning"
          type="number"
          min="1"
          max="60"
          value={settings.alarmTriggerA}
          onChange={(e) => {
            changeSettings("alarmTriggerA", e.target.value);
          }}
        ></StyledIcsNumberInput>
        <br />
        <label htmlFor="secondWarning">Second warning</label>
        <StyledIcsNumberInput
          id="secondWarning"
          type="number"
          min="1"
          max="60"
          value={settings.alarmTriggerB}
          onChange={(e) => {
            changeSettings("alarmTriggerB", e.target.value);
          }}
        ></StyledIcsNumberInput>
        <br />
        <label htmlFor="eventDuration">Event duration</label>
        <StyledIcsNumberInput
          id="eventDuration"
          type="number"
          min="1"
          max="60"
          value={settings.eventDuration}
          onChange={(e) => {
            changeSettings("eventDuration", e.target.value);
          }}
        ></StyledIcsNumberInput>
      </IcsSettingsContainer>
    </>
  );
}
