import styled from "styled-components";
import { SettingsHeader } from "../DisplaySettings/DisplaySettings.styled";
import { PreferredCurrenciesContainer } from "./PreferredCurrencies.styled";

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
      <SettingsHeader>
        Show preferred currencies only:
        <input
          type="checkbox"
          onChange={() => changeSettings("preferredCurrenciesToggle")}
          checked={settings.flagsTurnedOn}
        ></input>
      </SettingsHeader>

      <PreferredCurrenciesContainer>
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
      </PreferredCurrenciesContainer>
    </>
  );
}
