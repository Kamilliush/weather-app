import HourCard from './HourCard';

export default function TodaysForecastGrid({ nextHours }) {
  return (
    <div className="todaysForecastGrid">
      {nextHours.map((hourData, index) => (
        <div>
          <HourCard key={index} hourData={hourData} />
        </div>
      ))}
    </div>
  );
}
