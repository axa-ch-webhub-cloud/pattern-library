import React, { useState } from 'react';
import AXAFieldset from '../../fieldset/react/AXAFieldsetReact';
import AXARadioButton from './AXARadioButtonReact';

const DemoRadiobuttonsControlled = () => {
  const [button, setButton] = useState(true);
  const [frozen, setFrozen] = useState(false);
  const [error, setError] = useState('');
  const [checked, setChecked] = useState([true, false]);
  const [focus, setFocus] = useState([false, false]);
  const [blur, setBlur] = useState([false, false]);

  const handleRadioButtonChange = () =>
    setChecked(frozen ? checked : checked.map(check => !check));

  const handleRadioButtonBlur = index => () => {
    setBlur(blur.map((b, i) => (i === index ? !b : b)));
  };

  const handleRadioButtonFocus = index => () => {
    setFocus(focus.map((f, i) => (i === index ? !f : f)));
  };

  const handleFreeze = () => setFrozen(!frozen);

  const handleButton = () => setButton(!button);

  const handleError = () => {
    setError(error ? '' : 'Invalid choice');
  };

  return (
    <fieldset>
      <legend>RadioButton Callback Props</legend>
      <label htmlFor="freeze">
        <input
          id="freeze"
          type="checkbox"
          checked={frozen}
          onChange={handleFreeze}
          style={{ margin: 0 }}
        />
        &nbsp;freeze&nbsp;
      </label>
      <label htmlFor="button">
        <input
          id="button"
          type="checkbox"
          checked={button}
          onChange={handleButton}
        />
        &nbsp;button&nbsp;
      </label>
      <label htmlFor="error">
        <input
          id="error"
          type="checkbox"
          checked={!!error}
          onChange={handleError}
        />
        &nbsp;error&nbsp;
      </label>
      <hr
        style={{ borderWidth: '.5rem', borderColor: 'transparent', margin: 0 }}
      />
      <AXAFieldset horizontal={button} error={error}>
        <AXARadioButton
          id="radio1"
          label="No, thanks"
          name="insurance"
          checked={checked[0]}
          onFocus={handleRadioButtonFocus(0)}
          onBlur={handleRadioButtonBlur(0)}
          onChange={handleRadioButtonChange}
          button={button}
          noGap
        />
        <AXARadioButton
          id="radio2"
          label="Yes, I want insurance"
          name="insurance"
          checked={checked[1]}
          onFocus={handleRadioButtonFocus(1)}
          onBlur={handleRadioButtonBlur(1)}
          onChange={handleRadioButtonChange}
          button={button}
        />
      </AXAFieldset>
      <div
        style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}
      >
        <span id="checked">
          checked: ⟨{String(checked[0])}, {String(checked[1])}⟩
        </span>
        <span>
          focus: ⟨{String(focus[0])}, {String(focus[1])}⟩
        </span>
        <span>
          blur: ⟨{String(blur[0])}, {String(blur[1])}⟩
        </span>
        <span>frozen: {String(frozen)}</span>
      </div>
    </fieldset>
  );
};

export default DemoRadiobuttonsControlled;
