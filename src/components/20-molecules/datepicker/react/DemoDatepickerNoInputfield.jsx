import React, { useState } from 'react';
import AXADatepickerReact from './AXADatepickerReact';

const DemoDatepickerNoInputfield = () => {
  const [showDatepicker, setShowDatepicker] = useState(true);
  return (
    <div>
      <button onClick={() => setShowDatepicker(!showDatepicker)}>
        Toggle Datepicker
      </button>
      <hr />
      {showDatepicker && (
        <AXADatepickerReact
          allowedyears={[2020, 2021, 2022]}
          locale="de-CH"
          year={2020}
          month={1}
          day={1}
          // eslint-disable-next-line no-console
          onDateChange={date => console.log(`date changed ${date}`)}
        />
      )}
    </div>
  );
};

export default DemoDatepickerNoInputfield;
