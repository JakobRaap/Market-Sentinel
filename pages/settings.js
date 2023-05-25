import IcsSettings from "@/components/IcsSettings";
import NavigationBar from "@/components/NavigationBar";
import PreferredCurrencies from "@/components/PreferredCurrencies";

export default function settings({ onChechboxesToggle, settings }) {
  return (
    <>
      <PreferredCurrencies
        onChechboxesToggle={onChechboxesToggle}
        settings={settings}
      ></PreferredCurrencies>
      <IcsSettings />
      <NavigationBar />
    </>
  );
}
