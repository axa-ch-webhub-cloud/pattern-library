import React, { useState } from 'react';
import AXACheckbox from './AXACheckboxReact';

export default function App() {
  const [rerenders, setRerenders] = useState(1);
  const [label, setLabel] = useState(`Rerenders: ${rerenders - 1}`);

  const updateLabel = () => {
    setRerenders(rerenders + 1);
    setLabel(`Rerenders: ${rerenders}`);
  };

  return (
    <div className="App">
      <button
        type="button"
        className="js-checkbox__demo-button-rerender-children"
        onClick={updateLabel}
      >
        Rerender Children
      </button>
      <h1>Test label prop</h1>
      <AXACheckbox className="first" label={label} />
      <h1>Test label as child</h1>
      <AXACheckbox className="second">
        <p>{label}</p>
      </AXACheckbox>
    </div>
  );
}
