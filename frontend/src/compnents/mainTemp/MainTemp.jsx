export default function MainTemp({ cityData }) {
  if (!cityData) {
    return <div>Loading current weather...</div>;
  }

  return (
    <div className="mainTemp">
      <p className="temp">{Math.round(cityData.current.temp_c)}°C</p>
    </div>
  );
}
