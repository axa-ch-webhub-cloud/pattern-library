import React, { useState } from 'react';
import AXADatepickerReact from './AXADatepickerReact';

const DemoDatepickerReRenderOnEveryKeyStroke = () => {
  const START_VALUE = '';
  const [value, setValue] = useState(START_VALUE);
  const [date, setDate] = useState(null);
  const config = {
    label: 'Contract date',
    required: true,
    error: 'Please enter a valid date',
    mandatory: 'This field cannot be left empty',
  };
  // N.B. ...key={value} deliberately causes a re-render at every keystroke, to illustrate
  // robust datepicker usage under inadvertent excessive React re-rendering (this is an anti-pattern, of course)
  return (
    <div key={value}>
      <AXADatepickerReact
        inputfield
        id="datepicker-react-inputfield-rerender-on-date-change"
        data-test-id="datepicker-react-rerender-on-date-change"
        locale="de-CH"
        onDateChange={(d) => setDate(d)}
        onChange={(e) => {
          setValue(e.target.value);
          setDate(null);
        }}
        defaultValue={value}
        monthtitle="Month"
        yeartitle="Year"
        placeholder="Choose a date"
        label={config.label}
        checkMark={config.required && value && date}
        invalid={!(value && date)}
        required={config.required}
        invaliddatetext={value ? config.error : config.mandatory}
        allowedyears={[2019, 2020]}
        autofocus={value !== START_VALUE}
      />
    </div>
  );
};

export default DemoDatepickerReRenderOnEveryKeyStroke;
