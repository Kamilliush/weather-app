import './CityToggle.css';

export default function CityToggle({ isGliwice, onSelectGliwice, onSelectHamburg }) {
  return (
    <div className="toggleContainer">
      <button className={`toggleButton ${isGliwice ? 'active' : ''}`} onClick={onSelectGliwice}>
        Gliwice
      </button>
      <button className={`toggleButton ${!isGliwice ? 'active' : ''}`} onClick={onSelectHamburg}>
        Hamburg
      </button>
    </div>
  );
}
