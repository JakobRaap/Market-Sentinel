import DisplaySettings from "@/components/DisplaySettings";
import { CenteredHeader1 } from "@/components/DisplaySettings/DisplaySettings.styled";
import IcsSettings from "@/components/IcsSettings";
import NavigationBar from "@/components/NavigationBar";
import { Placeholder } from "@/components/Placeholder/Placeholder.styled";
import PreferredCurrencies from "@/components/PreferredCurrencies";

export default function settings({ changeSettings, settings }) {
  return (
    <>
      <CenteredHeader1>Settings</CenteredHeader1>
      <PreferredCurrencies
        changeSettings={changeSettings}
        settings={settings}
      />
      <IcsSettings settings={settings} changeSettings={changeSettings} />
      <DisplaySettings settings={settings} changeSettings={changeSettings} />
      <Placeholder />
      <Placeholder />
    </>
  );
}
