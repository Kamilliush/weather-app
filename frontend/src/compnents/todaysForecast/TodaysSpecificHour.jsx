export default function TodaysSpecificHour({ hourData }) {
  const { time, temp_c, condition } = hourData;
  return (
    <div className="forecastGrid">
      {new Date(time).getHours()}:00 - {Math.round(temp_c) + '°C'}
      <img src={condition.icon} alt="" />
    </div>
  );
}
