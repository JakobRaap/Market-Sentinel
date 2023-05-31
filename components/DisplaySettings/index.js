export default function DisplaySettings({ settings, changeSettings }) {
  return (
    <>
      <h3>Display Settings</h3>
      <label htmlFor="checkboxLow">Low impact events</label>
      <input
        id="checkboxLow"
        checked={settings.impactLow}
        onChange={() => changeSettings("impactLow")}
        type="checkbox"
      />
      <br />
      <label htmlFor="checkboxMedium">Medium impact events</label>
      <input
        type="checkbox"
        id="checkboxMedium"
        checked={settings.impactMedium}
        onChange={() => changeSettings("impactMedium")}
      />
      <br />
      <label htmlFor="checkboxHigh">High impact events</label>
      <input
        type="checkbox"
        id="checkboxHigh"
        checked={settings.impactHigh}
        onChange={() => changeSettings("impactHigh")}
      />
      <br />
      <label htmlFor="checkboxBankHoliday">Show bank holidays</label>
      <input
        type="checkbox"
        id="checkboxBankHoliday"
        checked={settings.bankHolidays}
        onChange={() => changeSettings("bankHolidays")}
      />
      <br />
      <label htmlFor="checkboxShowRiskIcons">Show risk icons</label>
      <input
        type="checkbox"
        id="checkboxShowRiskIcons"
        checked={settings.showRiskIcons}
        onChange={() => changeSettings("showRiskIcons")}
      />
    </>
  );
}
