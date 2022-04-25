import React, { useState } from 'react';
import AXAInputPhone from './InputPhone';

const defaultValue = '795002020';

function DemoInputPhone() {
  const [frozen, setfrozen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(defaultValue);

  const handleFrozen = event => {
    event.stopPropagation();
    setfrozen(event.target.checked);
  };

  const handleChange = value => {
    if (!frozen) {
      setPhoneNumber(value);
    }
  };

  return (
    <div>
      <p>
        <label htmlFor="freeze-input">
          controlled mode - freeze values:
          <input
            name="freeze-input"
            type="checkbox"
            id="input-phone-frozen-mode"
            onClick={handleFrozen}
          />
        </label>
      </p>
      <p id="inputtext-react-testoutput">
        Entered phone number (onChange): {phoneNumber}
      </p>
      <AXAInputPhone
        label="Input Phone"
        error="Ungültiges Format"
        lang="de"
        countrycode="+43"
        countryflags
        defaultValue={defaultValue}
        value={phoneNumber}
        onChange={handleChange}
      />
    </div>
  );
}

export default DemoInputPhone;
