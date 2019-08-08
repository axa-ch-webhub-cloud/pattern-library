import withReact from '../../../utils/with-react';
import AXAInputText from './index';

export default createElement => ({
  refId = '',
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
  className,
  onFocus = () => {},
  onBlur = () => {},
  onChange = () => {},
}) => {
  return withReact(createElement)(AXAInputText.tagName, {
    refId,
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
    className,
    onChange,
    onFocus,
    onBlur,
    isReact: true,
  });
};
