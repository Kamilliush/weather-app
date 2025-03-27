export default function SpecificDay({ dayData, index }) {
  const { date, day } = dayData;
  const { maxtemp_c, mintemp_c, condition } = day;

  const weekday = new Date(date).toLocaleDateString('en-US', { weekday: 'short' });

  return (
    <div key={index}>
      <b>{weekday}</b> <span></span>
      {Math.round(maxtemp_c)}°C / {Math.round(mintemp_c)}°C
      <img src={condition.icon} alt="" />
    </div>
  );
}
