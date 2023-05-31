export default function IcsSettings({ settings, changeSettings }) {
  return (
    <>
      <h3>Calendar Event Settings</h3>
      <label htmlFor="firstWarning">First warning</label>
      <input
        id="firstWarning"
        type="number"
        min="1"
        max="60"
        value={settings.alarmTriggerA}
        onChange={(e) => {
          changeSettings("alarmTriggerA", e.target.value);
        }}
      ></input>
      <br />
      <label htmlFor="secondWarning">Second warning</label>
      <input
        id="secondWarning"
        type="number"
        min="1"
        max="60"
        value={settings.alarmTriggerB}
        onChange={(e) => {
          changeSettings("alarmTriggerB", e.target.value);
        }}
      ></input>
      <br />
      <label htmlFor="eventDuration">Event duration</label>
      <input
        id="eventDuration"
        type="number"
        min="1"
        max="60"
        value={settings.eventDuration}
        onChange={(e) => {
          changeSettings("eventDuration", e.target.value);
        }}
      ></input>
    </>
  );
}
