import SunTime from './SunTime';

export default function SunTimesGrid({ sunrise, sunset }) {
  return (
    <div className="sun-times-grid">
      <SunTime label="Sunrise" time={sunrise} />
      <SunTime label="Sunset" time={sunset} />
    </div>
  );
}
