import DisplaySettings from "@/components/DisplaySettings";
import IcsSettings from "@/components/IcsSettings";
import NavigationBar from "@/components/NavigationBar";
import PreferredCurrencies from "@/components/PreferredCurrencies";

export default function settings({ changeSettings, settings }) {
  return (
    <>
      <PreferredCurrencies
        changeSettings={changeSettings}
        settings={settings}
      />
      <IcsSettings settings={settings} changeSettings={changeSettings} />
      <DisplaySettings settings={settings} changeSettings={changeSettings} />
      <NavigationBar />
    </>
  );
}
