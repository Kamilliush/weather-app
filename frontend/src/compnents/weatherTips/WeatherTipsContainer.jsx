import { getWeatherTips } from './tipsDatabase';
import TipItem from './TipItem';

export default function WeatherTipsContainer({ cityData }) {
  if (!cityData || !cityData.current) {
    return <div>Loading weather tips...</div>;
  }
  console.log(cityData.current.temp_c);
  const temperature = Math.round(cityData.current.temp_c);
  const conditionText = cityData.current.condition.text.toLowerCase();

  const tips = getWeatherTips(temperature, conditionText);

  return (
    <div>
      <h1>Today's Tip</h1>
      {tips.length === 0 ? (
        <p>No specific tips for now.</p>
      ) : (
        tips.map((tip, index) => <TipItem key={index} tip={tip} />)
      )}
    </div>
  );
}
