import CalendarNavigationBar from "@/components/CalendarNavigationBar";
import NavigationBar from "@/components/NavigationBar";
import TodaysCards from "@/components/TodaysCards";

export default function HomePage({ onToggleAlarm, todaysEvents, settings }) {
  return (
    <div>
      <CalendarNavigationBar page="today" />
      <TodaysCards
        events={todaysEvents}
        onToggleAlarm={onToggleAlarm}
        settings={settings}
      ></TodaysCards>
    </div>
  );
}
