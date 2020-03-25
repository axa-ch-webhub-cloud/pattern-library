import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AXACheckbox from './AXACheckboxReact';

// helper components
const labelJSX = variableText => (
  <>
    {variableText}, also you can{' '}
    <a href="https://www.google.ch" target="_blank">
      click me
    </a>
  </>
);

// the app
export default function App() {
  const [rerenders, setRerenders] = useState(1);
  const [label, setLabel] = useState(`Rerenders: ${rerenders - 1}`);

  // callbacks
  const updateLabel = e => {
    if (e) {
      setRerenders(rerenders + 1);
      setLabel(`Rerenders: ${rerenders}`);
    } else {
      updateLabel.domLabel = new DocumentFragment();
    }
    ReactDOM.render(labelJSX(label), updateLabel.domLabel);
    return updateLabel.domLabel;
  };

  // JSX
  return (
    <div className="App">
      <button
        className="js-checkbox__demo-button-rerender-domlabel"
        onClick={updateLabel}
      >
        Rerender Children
      </button>
      <h1>Test label prop</h1>
      <AXACheckbox className="first" label={label} />
      <h1>Test DOM label</h1>
      <AXACheckbox className="second" domLabel={updateLabel()}></AXACheckbox>
    </div>
  );
}
