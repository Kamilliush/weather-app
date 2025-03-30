import React from 'react';
import ConditionItem from './ConditionItem';
import './Conditions.css';
import { WiThermometer, WiStrongWind, WiFog, WiDaySunny } from 'react-icons/wi';

export default function ConditionsContainer({ cityData }) {
  if (!cityData) {
    return <div>Loading weather conditions...</div>;
  }

  const { current } = cityData;
  const { feelslike_c, wind_kph, uv, vis_km } = current;

  return (
    <div className="container">
      <p className="containerHeader">Air conditions</p>
      <div className="conditionGrid">
        <ConditionItem label="Feels Like" value={feelslike_c} unit={'°C'} icon={<WiThermometer size={60} />} />
        <ConditionItem label="Wind" value={wind_kph} unit={'km/h'} icon={<WiStrongWind size={60} />} />
        <ConditionItem label="Visibility" value={vis_km} unit={'km'} icon={<WiFog size={60} />} />
        <ConditionItem label="UV Index" value={uv} unit={''} icon={<WiDaySunny size={60} />} />
      </div>
    </div>
  );
}
