import TodaysCards from "./components/TodaysCards";

export default function HomePage({ events }) {
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

  return (
    <div>
      <TodaysCards events={todaysEvents}></TodaysCards>
    </div>
  );
}
