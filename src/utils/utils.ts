// Kevin's code4
// Only for Date.now() values. example: 1647840000000
// Returns date as example = "21/03/2024" and time as example "12:00:00"
export function formatTimestamp(timestamp: number): {
  date: string;
  time: string;
} {
  const dateAndTime: Date = new Date(timestamp);
  const date: string = dateAndTime.toLocaleDateString("en-GB");
  const time: string = dateAndTime.toLocaleTimeString("en-GB");
  return {
    date,
    time,
  };
}
