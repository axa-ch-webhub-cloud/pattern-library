import React, { useState } from 'react';
import AXADatepickerReact from './AXADatepickerReact';

const DemoDatepickerExternalValidation = () => {
  const [outsideDateRange, setOutsideDateRange] = useState(false);
  const locale = 'de-CH';

  const localizedDateString = (date) =>
    date.toLocaleString(locale, {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });

  const [start, end] = [new Date('2019-04-01'), new Date('2020-04-01')];

  const checkOutsideDateRange = (date) => +date < +start || +date >= +end;

  return (
    <div>
      Enter a date between
      <span style={{ padding: '5px' }}>{localizedDateString(start)}</span> and
      <span style={{ padding: '5px' }}>{localizedDateString(end)}:</span>
      <hr style={{ borderWidth: '0' }} />
      <AXADatepickerReact
        inputfield
        id="datepicker-react-inputfield-external-validation"
        data-test-id="datepicker-react-external-validation"
        locale={locale}
        onDateChange={(newDate) =>
          setOutsideDateRange(checkOutsideDateRange(newDate))
        }
        placeholder="Choose a date"
        invalid={outsideDateRange}
        invaliddatetext={
          outsideDateRange
            ? 'Date is outside allowed range'
            : 'Date is improper'
        }
        allowedyears={[2019, 2020]}
      />
    </div>
  );
};

export default DemoDatepickerExternalValidation;
