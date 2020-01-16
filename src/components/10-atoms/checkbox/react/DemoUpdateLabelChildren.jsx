import React, { useState, useEffect } from 'react';
import AXACheckbox from './AXACheckboxReact';

export default function App() {
  const [label, setLabel] = useState("initial");

  useEffect(() => {
    setTimeout(() => setLabel("after"), 3000);
  }, []);

  return (
    <div className="App">
      <h1>Test label prop</h1>
      <AXACheckbox className="first" label={label} />
      <h1>Test label as child</h1>
      <AXACheckbox className="second">
        <p>{label}</p>
      </AXACheckbox>
    </div>
  );
}
