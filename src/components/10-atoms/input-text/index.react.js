import withReact from '../../../utils/with-react';
import AXAInputText from './index';

export default createElement => ({
  id = '',
  name = '',
  label = '',
  placeholder = '',
  value,
  error = '',
  info = '',
  valid = true,
  required = false,
  disabled = false,
  debug = false,
  onFocus = () => {},
  onBlur = () => {},
  onChange = () => {}
}) => {
  return withReact(createElement)(AXAInputText.tagName, {
    id,
    name,
    label,
    placeholder,
    value,
    valid,
    error,
    info,
    required,
    disabled,
    debug,
    onChange,
    onFocus,
    onBlur,
    isReact: true,
  });
}
