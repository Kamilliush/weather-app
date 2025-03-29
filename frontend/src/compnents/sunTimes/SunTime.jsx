export default function SunTime({ label, time }) {
  return (
    <div className="sunTime">
      <h3>{label}</h3>
      <p>{time}</p>
    </div>
  );
}
