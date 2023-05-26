export default function DisplaySettings({ settings, changeSettings }) {
  return (
    <>
      <h3>Display Settings</h3>
      <label htmlFor="checkboxLow">Low</label>
      <input
        id="checkboxLow"
        checked={settings.impactLow}
        onChange={() => changeSettings("impactLow")}
        type="checkbox"
      />
      <label htmlFor="checkboxMedium">Medium</label>
      <input
        type="checkbox"
        id="checkboxMedium"
        checked={settings.impactMedium}
        onChange={() => changeSettings("impactMedium")}
      />
      <label htmlFor="checkboxHigh">High</label>
      <input
        type="checkbox"
        id="checkboxHigh"
        checked={settings.impactHigh}
        onChange={() => changeSettings("impactHigh")}
      />
    </>
  );
}
