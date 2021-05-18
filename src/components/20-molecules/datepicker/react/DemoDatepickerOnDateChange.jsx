import React from 'react';
import AXADatepickerReact from './AXADatepickerReact';

const DemoDatepickerOnDateChange = () => {
  const startDateString = '2019-07-29';
  const [selectedDateString, setSelectedDateString] = React.useState(startDateString);
  const locale = 'de-CH';

  const localizedDateString = date =>
    date.toLocaleString(locale, {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });

  const formatDate = date => {
    const twoDigitMonth = `0${date.getMonth() + 1}`.slice(-2);
    const twoDigitDay = `0${date.getDate()}`.slice(-2);
    return `${date.getFullYear()}-${twoDigitMonth}-${twoDigitDay}`;
  };

  const defaultValue = localizedDateString(new Date(startDateString));
  const style = {
    width: '300px',
  };
  // N.B. onBlur={undefined} is there to demonstrate undefined property values don't throw exceptions (cf. issue #1613)
  return (
    <div>
      <p>Selected date: {selectedDateString}</p>
      <AXADatepickerReact style={style} inputfield id="datepicker-react-inputfield-on-date-change" data-test-id="datepicker-react-inputfield-on-date-change" locale={locale} defaultValue={defaultValue} onDateChange={newDate => setSelectedDateString(formatDate(newDate))} onBlur={undefined} placeholder="Wählen Sie ein Datum" allowedyears={[2019, 2020]} />
    </div>
  );
};

export default DemoDatepickerOnDateChange;
