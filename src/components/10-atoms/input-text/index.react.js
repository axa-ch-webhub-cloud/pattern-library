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
  info = '',
  type = 'text',
  invalid = false,
  required = false,
  disabled = false,
  checkMark = false,
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
    invalid,
    error,
    info,
    type,
    required,
    disabled,
    checkMark,
    onChange,
    onFocus,
    onBlur,
    isReact: true,
  });
};
