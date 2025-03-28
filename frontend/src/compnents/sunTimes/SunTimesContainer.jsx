import SunTimesGrid from './SunTimesGrid';

export default function SunTimesContainer({ cityDataForecast }) {
  if (!cityDataForecast || !cityDataForecast.forecast) {
    return <div>Loading sun times forecast weather...</div>;
  }
  const { forecast } = cityDataForecast;

  const sunrise = forecast.forecastday[0].astro.sunrise;
  const sunset = forecast.forecastday[0].astro.sunset;
  return (
    <div className="container">
      <p className="containerHeader">Sun</p>
      <SunTimesGrid sunrise={sunrise} sunset={sunset} />
    </div>
  );
}
