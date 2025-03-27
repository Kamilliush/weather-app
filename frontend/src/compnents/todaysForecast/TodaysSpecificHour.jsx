export default function TodaysSpecificHour({ hourData }) {
  return (
    <div className="forecastGrid">
      {new Date(hourData.time).getHours()}:00 - {Math.round(hourData.temp_c)}°C
    </div>
  );
}
