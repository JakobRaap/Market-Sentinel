import CalendarNavigationBar from "@/components/CalendarNavigationBar";
import NavigationBar from "@/components/NavigationBar";
import TodaysCards from "@/components/TodaysCards";
var alarm = require("alarm");
export default function HomePage({ events, onToggleAlarm }) {
  function getTodaysDate() {
    const today = new Date();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    const year = today.getFullYear().toString();
    const todaysDate = `${month}-${day}-${year}`;
    return todaysDate;
  }
  const todaysEvents = events.filter((event) => {
    return event.date === getTodaysDate();
  });

  // function handleAlarm() {
  //   var now = new Date();
  //   var date = new Date(+now + 2000);
  //   alarm(date, function () {
  //     console.log("Hello, world!");
  //   });
  // }

  console.warn(events);

  return (
    <div>
      <CalendarNavigationBar page="today" />

      <TodaysCards
        events={todaysEvents}
        onToggleAlarm={onToggleAlarm}
      ></TodaysCards>
      <NavigationBar />
    </div>
  );
}
