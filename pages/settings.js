import NavigationBar from "@/components/NavigationBar";
import PreferredCurrencies from "@/components/PreferredCurrencies";

export default function settings({ onChechboxesToggle, selectedFlags }) {
  return (
    <>
      <PreferredCurrencies
        onChechboxesToggle={onChechboxesToggle}
        selectedFlags={selectedFlags}
      ></PreferredCurrencies>
      <NavigationBar />
    </>
  );
}
