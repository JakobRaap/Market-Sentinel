import styled from "styled-components";
const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  align-items: center;
`;
const countryFlags = {
  USD: "🇺🇸",
  EUR: "🇪🇺",
  GBP: "🇬🇧",
  AUD: "🇦🇺",
  CAD: "🇨🇦",
  NZD: "🇳🇿",
  CHF: "🇨🇭",
  JPY: "🇯🇵",
  CNY: "🇨🇳",
};
export default function PreferredCurrencies({ changeSettings, settings }) {
  return (
    <>
      <h1>Settings</h1>
      <h4>
        Show preferred currencies only:
        <input
          type="checkbox"
          onChange={() => changeSettings("preferredCurrenciesToggle")}
          checked={settings.flagsTurnedOn}
        ></input>
      </h4>

      <StyledSection>
        {Object.entries(countryFlags).map(([currencyCode, emoji]) => (
          <label key={currencyCode}>
            <input
              type="checkbox"
              onChange={() => changeSettings("flag", currencyCode)}
              checked={settings.countryFlags[currencyCode]}
              disabled={!settings.flagsTurnedOn}
            />
            {emoji} {currencyCode}
          </label>
        ))}
      </StyledSection>
    </>
  );
}
