import React from 'react';
import useToogle from './useToogle';

export default function ToggleComponent() {
  const [value, toggleValue] = useToogle(true);
  return (
    <div>
      <div>{value.toString()}</div>
      <button onClick={toggleValue}>Toogle</button>
      <button onClick={() => toggleValue(true)}>Set True</button>
      <button onClick={() => toggleValue(false)}>Set False</button>
    </div>
  );
}
