import { useEffect, useState } from 'react';
import CityToggle from './compnents/cityToggle/CityToggle';
import MainTemp from './compnents/mainTemp/mainTemp';

import './App.css';

function App() {
  const [weather, setWeather] = useState();
  const [error, setError] = useState();
  const [isGliwice, setIsGliwice] = useState(true);

  useEffect(() => {
    fetch('/realtime-weather')
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((err) => setError(err.message));
  }, []);

  const handleSelectGliwice = () => setIsGliwice(true);
  const handleSelectHamburg = () => setIsGliwice(false);

  const cityData = weather ? (isGliwice ? weather.gliwice : weather.hamburg) : null;

  return (
    <>
      <h1>Hello world</h1>
      <CityToggle isGliwice={isGliwice} onSelectGliwice={handleSelectGliwice} onSelectHamburg={handleSelectHamburg} />
      <MainTemp cityData={cityData} />
    </>
  );
}

export default App;
