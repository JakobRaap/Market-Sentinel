export default function DisplaySettings({ settings, changeSettings }) {
  console.log(settings);
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
      <br></br>
      <label htmlFor="checkboxBankHoliday">Show bank holidays</label>
      <input
        type="checkbox"
        id="checkboxBankHoliday"
        checked={settings.bankHolidays}
        onChange={() => changeSettings("bankHolidays")}
        className="checkbox"
      />
    </>
  );
}
