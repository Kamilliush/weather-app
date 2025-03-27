export default function ConditionItem({ label, icon, value }) {
  return (
    <div>
      <img src={icon} alt={`${label} icon`} width="50px" />
      {label}: <span></span>
      {value}
    </div>
  );
}
