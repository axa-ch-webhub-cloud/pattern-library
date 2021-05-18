import React, { useState } from 'react';
import AXADatepickerReactPod from './AXADatepickerReactPod';
import AXACheckboxReactPod from './AxaCheckboxReactPod';

const DemoDatepicker = () => {
  const [value, setValue] = useState('4.6.2019');
  const [frozen, setFrozen] = useState(false);

  const handleChange = event => {
    setValue(frozen ? value : event.target.value);
  };

  const handleValueFreeze = () => {
    setFrozen(!frozen);
  };

  return (
    <div>
      <p>With the React wrapper - controlled and Pod-versioned &lt;axa-datepicker&gt; component with callback prop and date-error validation!</p>
      <AXACheckboxReactPod name="datepicker-controlled-react-checkbox" onChange={handleValueFreeze} label="freeze value" />
      <br />
      <AXADatepickerReactPod inputfield id="datepicker-controlled-react" data-test-id="datepicker-controlled-react" onChange={handleChange} value={value} locale="de-CH" day={25} month={1} year={2020} allowedyears={[2019, 2020]} />
      <br />
      <p>
        Controlled value &quot;
        <span data-test-id="datepicker-react-controlled-value">{`${value}${frozen ? ' (frozen)' : ''}`}</span>
        &quot;.
      </p>
    </div>
  );
};

export default DemoDatepicker;
