import React from 'react';

export default function ConditionItem({ label, icon, value, unit }) {
  return (
    <div className="conditionItem">
      <div className="conditionIcon">{icon}</div>
      <p>
        <b>{label}:</b>{' '}
        <span style={{ whiteSpace: 'nowrap' }}>
          {Math.round(value)} {unit}
        </span>
      </p>
    </div>
  );
}
