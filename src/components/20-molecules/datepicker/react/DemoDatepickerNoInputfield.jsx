import React, { useState } from 'react';
import AXADatepickerReact from './AXADatepickerReact';
import AXATextReact from '../../../10-atoms/text/react/AXATextReact';

const DemoDatepickerNoInputfield = () => {
  const [showDatepicker, setShowDatepicker] = useState(true);
  return (
    <div>
      <button type="button" onClick={() => setShowDatepicker(!showDatepicker)}>
        Toggle Datepicker
      </button>
      <hr />
      {showDatepicker && (
        <>
          <AXADatepickerReact
            allowedyears={[2020, 2021, 2022]}
            locale="de-CH"
            year={2020}
            month={1}
            day={1}
            // eslint-disable-next-line no-console
            onDateChange={date =>
              (document.getElementById(
                'checkbox-output'
              ).innerHTML = `Date changed to: ${date}`)
            }
          />
          <AXATextReact id="checkbox-output">Date changed to:</AXATextReact>
        </>
      )}
    </div>
  );
};

export default DemoDatepickerNoInputfield;
