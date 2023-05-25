import IcsSettings from "@/components/IcsSettings";
import NavigationBar from "@/components/NavigationBar";
import PreferredCurrencies from "@/components/PreferredCurrencies";

export default function settings({ changeSettings, settings }) {
  return (
    <>
      <PreferredCurrencies
        changeSettings={changeSettings}
        settings={settings}
      ></PreferredCurrencies>
      <IcsSettings settings={settings} changeSettings={changeSettings} />
      <NavigationBar />
    </>
  );
}
