import ForecastGrid from './ForecastGrid';
import './Forecast.css';

export default function ForecastContainer({ cityDataForecast }) {
  if (!cityDataForecast || !cityDataForecast.forecast) {
    return <div>Loading forecast weather...</div>;
  }
  const { forecast } = cityDataForecast;

  const sevenDays = forecast.forecastday.slice(0, 7);
  return (
    <div className="container">
      <p className="containerHeader">Next Days Forecast</p>

      <ForecastGrid sevenDays={sevenDays} />
    </div>
  );
}
