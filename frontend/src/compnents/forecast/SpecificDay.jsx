export default function SpecificDay({ dayData, index }) {
  return (
    <div key={index}>
      {dayData.day.maxtemp_c}°C
      {dayData.day.mintemp_c}°C
    </div>
  );
}
