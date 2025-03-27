export default function CityToggle({ isGliwice, onSelectGliwice, onSelectHamburg }) {
  return (
    <div>
      <button className={`cityToggleButton ${isGliwice ? 'active' : ''}`} onClick={onSelectGliwice}>
        Gliwice
      </button>
      <button lassName={`cityToggleButton ${!isGliwice ? 'active' : ''}`} onClick={onSelectHamburg}>
        Hamburg
      </button>
    </div>
  );
}
