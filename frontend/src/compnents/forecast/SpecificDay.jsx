export default function SpecificDay({ dayData, index }) {
  console.log(dayData);
  return (
    <div key={index}>
      {dayData.day.maxtemp_c}°C
      {dayData.day.mintemp_c}°C
    </div>
  );
}
