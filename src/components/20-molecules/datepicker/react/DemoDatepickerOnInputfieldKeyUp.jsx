import React from 'react';
import AXADatepickerReact from './AXADatepickerReact';

const DemoDatepickerOnInputfieldKeyUp = () => {
  return (
    <div>
      <p>
        <span>Last key pressed: </span>
        <span id="datepicker-react-testoutput" />
      </p>
      <AXADatepickerReact
        inputfield
        id="datepicker-react-inputfield-on-date-change"
        onInputfieldKeyUp={(e) => {
          document.querySelector('#datepicker-react-testoutput').innerHTML =
            e.key;
        }}
        allowedyears={[2019, 2020]}
      />
    </div>
  );
};

export default DemoDatepickerOnInputfieldKeyUp;
