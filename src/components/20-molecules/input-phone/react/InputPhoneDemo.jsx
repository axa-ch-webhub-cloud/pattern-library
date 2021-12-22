import React, { useState } from 'react';
import AXAInputPhone from './InputPhone';

const DemoInputPhone = () => {
  const [phoneNumber, setPhoneNumber] = useState('-');

  const handleChange = value => {
    setPhoneNumber(value);
  };

  return (
    <div>
      <p id="inputtext-react-testoutput">
        Entered phone number (onChange): {phoneNumber}
      </p>
      <AXAInputPhone
        label="Input Phone"
        errorprefix="Invalid Number Format"
        lang="en"
        areavalue="+43"
        phonevalue="795002020"
        onChange={handleChange}
      />
    </div>
  );
};

export default DemoInputPhone;
