export default async function fetchThisWeek(req, res) {
  const response = await fetch(
    "https://nfs.faireconomy.media/ff_calendar_thisweek.xml"
  );
  const xml = await response.text();
  await res.status(200).json(xml);
}
