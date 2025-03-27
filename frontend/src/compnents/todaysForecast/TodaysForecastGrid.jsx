import TodaysSpecificHour from './TodaysSpecificHour';

export default function TodaysForecastGrid({ nextHours }) {
  return (
    <div>
      {nextHours.map((hourData, index) => (
        <TodaysSpecificHour key={index} hourData={hourData} />
      ))}
    </div>
  );
}
