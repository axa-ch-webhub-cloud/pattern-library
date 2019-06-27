import withReact from '../../../utils/with-react';
import AXATextarea from './index';

export default createElement => ({
  id = '',
  name = '',
  label = '',
  placeholder = '',
  error = '',
  defaultValue = '',
  value,
  valid = true,
  required = false,
  disabled = false,
  validation = false,
  counter = '',
  counterMax = '',
  maxLength,
  onFocus = () => {},
  onBlur = () => {},
  onChange = () => {},
}) => {
  return withReact(createElement)(AXATextarea.tagName, {
    id,
    name,
    label,
    placeholder,
    error,
    defaultValue,
    value,
    valid,
    required,
    disabled,
    validation,
    counter,
    counterMax,
    maxLength,
    onFocus,
    onBlur,
    onChange,
    isReact: true,
  });
};
