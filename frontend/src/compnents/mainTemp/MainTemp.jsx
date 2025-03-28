import './MainTemp.css';

export default function MainTemp({ cityData }) {
  if (!cityData) {
    return <div>Loading current weather...</div>;
  }

  return (
    <div className="mainTemp">
      <span className="temp">{Math.round(cityData.current.temp_c)}°C</span>
      <span className="verticalBorder"></span>
      <span className="sky">{cityData.current.condition.text}</span>
    </div>
  );
}
