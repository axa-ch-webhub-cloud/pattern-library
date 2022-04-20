import React, { useState } from 'react';
import AXAText from './AXATextReact.jsx';

const DemoTextReact = () => {
  const [counter, setCounter] = useState(1);
  const [text, setText] = useState(true);

  const handleChange = () => {
    setText(!text);
  };

  const handleCounter = (ev) => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <label className="js-pure-text">
        <span style={{ fontFamily: 'sans-serif', fontSize: '12px' }}>
          pure, non-HTML text
        </span>
        <input type="checkbox" onChange={handleChange} checked={text} />
      </label>
      <button
        className="js-update"
        onClick={handleCounter}
        style={{ fontFamily: 'sans-serif', marginLeft: '4rem' }}
      >
        update text
      </button>
      <hr />
      <AXAText>
        {text ? (
          `This is example pure text no. ${counter}`
        ) : (
          <span>{`This is example HTML text no. ${counter}`}</span>
        )}
      </AXAText>
    </div>
  );
};

export default DemoTextReact;
