import ForecastGrid from './ForecastGrid';

export default function ForecastContainer({ cityDataForecast }) {
  if (!cityDataForecast || !cityDataForecast.forecast) {
    return <div>Loading forecast weather...</div>;
  }
  const { forecast } = cityDataForecast;

  const sevenDays = forecast.forecastday.slice(0, 7);
  return (
    <div>
      <h1>Forecast</h1>
      <ForecastGrid sevenDays={sevenDays} />
    </div>
  );
}
