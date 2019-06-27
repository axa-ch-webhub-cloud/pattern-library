import withReact from '../../../utils/with-react';
import AXADatepicker from './index';

export default createElement => ({
  'data-test-id': dataTestId,
  inputfield,
  open,
  value,
  onChange = () => {},
  locale,
  day,
  month,
  year,
  allowedyears = [year],
  labelbuttonok = 'OK',
  labelbuttoncancel = 'Cancel',
  inputplaceholder = 'Please select a date',
  onAXADateChange = () => {},
}) =>
  withReact(createElement)(AXADatepicker.tagName, {
    'data-test-id': dataTestId,
    inputfield,
    open,
    value,
    onChange,
    locale,
    day,
    month,
    year,
    allowedyears,
    labelbuttonok,
    labelbuttoncancel,
    inputplaceholder,
    onAXADateChange,
    isReact: true,
  });
