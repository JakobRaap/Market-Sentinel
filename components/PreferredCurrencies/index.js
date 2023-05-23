import { useState } from "react";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  align-items: center;
`;

export default function PreferredCurrencies() {
  const [selectedFlags, setSelectedFlags] = useLocalStorageState(
    "selectedFlags",
    {
      defaultValue: [],
    }
  );
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

  const handleFlagToggle = (flag) => {
    if (selectedFlags.includes(flag)) {
      setSelectedFlags(
        selectedFlags.filter((selectedFlag) => selectedFlag !== flag)
      );
    } else {
      setSelectedFlags([...selectedFlags, flag]);
    }
    console.log(selectedFlags);
  };

  return (
    <>
      <h1>Settings</h1>
      <h3>Preferred currencies</h3>
      <StyledSection>
        {Object.entries(countryFlags).map(([flag, emoji]) => (
          <label key={flag}>
            <input
              type="checkbox"
              checked={selectedFlags.includes(flag)}
              onChange={() => handleFlagToggle(flag)}
            />
            {emoji} {flag}
          </label>
        ))}
      </StyledSection>
    </>
  );
}
