import React, { useState, useEffect } from 'react';
import AXACheckbox from './AXACheckboxReact';

export default function App() {
  const [label, setLabel] = useState("AAAAAA");

  useEffect(() => {
    setTimeout(() => setLabel("BBBBBB"), 3000);
  }, []);

  return (
    <div className="App">
      <h1>Test label prop</h1>
      <AXACheckbox id="111" label={label} />
      <h1>Test label as child</h1>
      <AXACheckbox id="222">
        <p>{label}</p>
      </AXACheckbox>
    </div>
  );
}
