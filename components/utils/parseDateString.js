export default function parseDateString(dateString) {
  const parts = dateString.split(" ");

  const dateParts = parts[0].split("-");
  const month = parseInt(dateParts[0], 10) - 1;
  const day = parseInt(dateParts[1], 10);
  const year = parseInt(dateParts[2], 10);

  const timeParts = parts[1].toLowerCase().split(":");
  let hours = parseInt(timeParts[0], 10);
  const minutes = parseInt(timeParts[1], 10);

  if (parts[2] === "pm") {
    hours += 12;
  }

  return new Date(year, month, day, hours, minutes);
}
