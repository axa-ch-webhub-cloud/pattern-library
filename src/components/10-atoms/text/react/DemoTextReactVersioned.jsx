import React, { useState } from 'react';
import AXAText from './AXATextReactVersioned.jsx';

const DemoTextReactVersioned = () => {
  const [counter, setCounter] = useState(1);
  const [variant, setVariant] = useState('bold');

  const handleVariant = () => {
    setVariant(variant ? '' : 'bold');
  };

  const handleCounter = ev => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <label className="js-variant-bold">
        <span style={{ fontFamily: 'sans-serif', fontSize: '12px' }}>
          variant 'bold'
        </span>
        <input type="checkbox" onChange={handleVariant} checked={!!variant} />
      </label>
      <button
        className="js-update"
        onClick={handleCounter}
        style={{ fontFamily: 'sans-serif', marginLeft: '4rem' }}
      >
        update text
      </button>
      <hr />
      <AXAText variant={variant}>
        {`This is example <axa-text-mypod> no. ${counter}`}
      </AXAText>
    </div>
  );
};

export default DemoTextReactVersioned;
