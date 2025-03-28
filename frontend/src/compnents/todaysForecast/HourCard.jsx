export default function HourCard({ hourData }) {
  const { time, temp_c, condition } = hourData;
  return (
    <div className="hourCard">
      {new Date(time).getHours()}:00
      <img src={condition.icon} alt="" />
      {Math.round(temp_c) + '°C'}
    </div>
  );
}
