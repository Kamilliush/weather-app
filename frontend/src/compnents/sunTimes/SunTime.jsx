export default function SunTime({ label, time }) {
  return (
    <div className="sun-time">
      <h3>{label}</h3>
      <p>{time}</p>
    </div>
  );
}
