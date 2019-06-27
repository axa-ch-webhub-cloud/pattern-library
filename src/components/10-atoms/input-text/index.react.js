import withReact from '../../../utils/with-react';
import AXAInputText from './index';

export default createElement => ({
  id = '',
  name = '',
  label = '',
  placeholder = '',
  value,
  defaultValue = '',
  error = '',
  type = 'text',
  valid = true,
  required = false,
  disabled = false,
  validation = false,
  onFocus = () => {},
  onBlur = () => {},
  onChange = () => {},
}) => {
  return withReact(createElement)(AXAInputText.tagName, {
    id,
    name,
    label,
    placeholder,
    value,
    defaultValue,
    valid,
    error,
    type,
    required,
    disabled,
    validation,
    onChange,
    onFocus,
    onBlur,
    isReact: true,
  });
};
