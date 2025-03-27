import TodaysForecastGrid from './TodaysForecastGrid';

export default function ForecastContainer({ cityDataForecast }) {
  if (!cityDataForecast || !cityDataForecast.forecast) {
    return <div>Loading forecast weather...</div>;
  }

  const { location, forecast } = cityDataForecast;
  const currentTime = new Date(location.localtime);

  const todayForecast = forecast.forecastday[0];
  const remainingHoursToday = todayForecast.hour.filter((hourData) => new Date(hourData.time) > currentTime);

  let nextHours = remainingHoursToday.slice(0, 7);
  if (nextHours.length < 7 && forecast.forecastday.length > 1) {
    const tomorrowForecast = forecast.forecastday[1];
    const hoursNeeded = 7 - nextHours.length;
    const additionalHours = tomorrowForecast.hour.slice(0, hoursNeeded);
    nextHours = nextHours.concat(additionalHours);
  }

  return (
    <div>
      <TodaysForecastGrid nextHours={nextHours} />
    </div>
  );
}
