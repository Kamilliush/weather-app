import ConditionItem from './ConditionItem';
export default function ConditionsContainer({ cityData }) {
  if (!cityData) {
    return <div>Loading weather conditions...</div>;
  }
  const { current } = cityData;
  const { feelslike_c, wind_kph, uv } = current;
  return (
    <div className="container">
      <p className="containerHeader">Air condition</p>
      <ConditionItem
        label="Preveived"
        value={feelslike_c}
        icon="https://cdn-icons-png.flaticon.com/512/3313/3313902.png"
      />
      <ConditionItem
        label="Wind"
        value={wind_kph}
        icon="https://cdn-icons-png.flaticon.com/512/824/824695.png
"
      />
      <ConditionItem label="UV Index" value={uv} icon="https://cdn-icons-png.flaticon.com/512/606/606795.png" />
    </div>
  );
}
