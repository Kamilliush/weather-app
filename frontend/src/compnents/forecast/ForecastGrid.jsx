import SpecificDay from './SpecificDay';

export default function ForecastGrid({ sevenDays }) {
  return (
    <div className="forecastGrid">
      {sevenDays.map((dayData, index) => (
        <SpecificDay key={index} dayData={dayData} />
      ))}
    </div>
  );
}
