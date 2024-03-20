//Kevin's code
export function formatTimestamp(timestamp: number): Object {
  const dateAndTime = new Date(timestamp);
  const date = dateAndTime.toLocaleDateString().substring(0, 10);
  const time = dateAndTime.toLocaleTimeString().substring(0, 5);
  return {
    time: time,
    date: date,
  };
}
