import { getWeatherTips } from './tipsDatabase';
import TipItem from './TipItem';
import './weatherTips.css';

export default function WeatherTipsContainer({ cityData }) {
  if (!cityData || !cityData.current) {
    return <div>Loading weather tips...</div>;
  }
  const temperature = Math.round(cityData.current.temp_c);
  const conditionText = cityData.current.condition.text.toLowerCase();

  const tips = getWeatherTips(temperature, conditionText);

  return (
    <div className="container">
      <p className="containerHeader">Today's tips</p>
      {tips.length === 0 ? (
        <p>No specific tips for now.</p>
      ) : (
        tips.map((tip, index) => <TipItem key={index} tip={tip} />)
      )}
    </div>
  );
}
