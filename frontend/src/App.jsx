import { useEffect, useState } from 'react';
import './App.css';

import CityToggle from './compnents/cityToggle/CityToggle';
import MainTemp from './compnents/mainTemp/mainTemp';
import TodaysForecastContainer from './compnents/todaysForecast/TodaysForecastContainer';
import ForecastContainer from './compnents/forecast/ForecastContainer';
import SunTimesContainer from './compnents/sunTimes/SunTimesContainer';
import ConditionsContainer from './compnents/conditions/ConditionsContainer';
import WeatherTipsContainer from './compnents/weatherTips/WeatherTipsContainer';
function App() {
  const [weather, setWeather] = useState();
  const [weatherForecast, setWeatherForecast] = useState();
  const [error, setError] = useState();
  const [isGliwice, setIsGliwice] = useState(true);

  useEffect(() => {
    fetch('/realtime-weather')
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((err) => setError(err.message));
  }, []);

  useEffect(() => {
    fetch('/forecast-weather')
      .then((response) => response.json())
      .then((data) => setWeatherForecast(data))
      .catch((err) => setError(err.message));
  }, []);

  const handleSelectGliwice = () => setIsGliwice(true);
  const handleSelectHamburg = () => setIsGliwice(false);

  const cityData = weather ? (isGliwice ? weather.gliwice : weather.hamburg) : null;
  const cityDataForecast = weatherForecast
    ? isGliwice
      ? weatherForecast.gliwiceForecast
      : weatherForecast.hamburgForecast
    : null;

  return (
    <div className="mainContainer">
      <div className="leftCol">
        <CityToggle isGliwice={isGliwice} onSelectGliwice={handleSelectGliwice} onSelectHamburg={handleSelectHamburg} />
        <MainTemp cityData={cityData} />
        <TodaysForecastContainer cityDataForecast={cityDataForecast} />

        <SunTimesContainer cityDataForecast={cityDataForecast} />
        <ConditionsContainer cityData={cityData} />
        <WeatherTipsContainer cityData={cityData} />
      </div>
      <div className="rightCol">
        <ForecastContainer cityDataForecast={cityDataForecast} />
      </div>
    </div>
  );
}

export default App;
