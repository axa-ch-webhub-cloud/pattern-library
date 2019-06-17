import withReact from '../../../utils/with-react';
import AXATextarea from './index';

export default createElement => ({
  id = '',
  name = '',
  label = '',
  placeholder = '',
  value,
  error = '',
  valid = true,
  required = false,
  disabled = false,
  validation = false,
  onFocus = () => {},
  onBlur = () => {},
  onChange = () => {},
}) => {
  return withReact(createElement)(AXATextarea.tagName, {
    id,
    name,
    label,
    placeholder,
    value,
    valid,
    error,
    required,
    disabled,
    validation,
    onChange,
    onFocus,
    onBlur,
    isReact: true,
  });
};
