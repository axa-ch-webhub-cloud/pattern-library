import withReact from '../../../utils/with-react';
import AXAInputText from './index';

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
    required,
    disabled,
    onChange,
    onFocus,
    onBlur,
    isReact: true,
  });
}
