export default function SpecificDay({ dayData, index }) {
  const { date, day } = dayData;
  const { maxtemp_c, mintemp_c, condition } = day;

  const weekday = new Date(date).toLocaleDateString('en-US', { weekday: 'short' });
  const weekdayLong = new Date(date).toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div key={index} className="dayCard">
      <span class="weekday">{weekday}</span>
      <span></span>
      <span class="weekdayLong">{weekdayLong}</span>
      <span></span>
      <div className="dayInfoSmall">
        <img src={condition.icon} alt="" />
        {Math.round(maxtemp_c)}°C / <br className="brDayTemp"></br> {Math.round(mintemp_c)}°C
      </div>
      <div className="dayInfoBig">
        {Math.round(maxtemp_c)}°C / <br className="brDayTemp"></br> {Math.round(mintemp_c)}°C
        <img src={condition.icon} alt="" />
      </div>
    </div>
  );
}
