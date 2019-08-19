import withReact from '../../../utils/with-react';
import createRefId from '../../../utils/create-ref-id';
import AXATextarea from './index';

export default createElement => ({
  name = '',
  label = '',
  refId = `textarea-${createRefId()}`,
  placeholder = '',
  error = '',
  defaultValue = '',
  value,
  invalid = false,
  required = false,
  disabled = false,
  checkMark = false,
  counter = '',
  counterMax = '',
  maxLength,
  className,
  onFocus = () => {},
  onBlur = () => {},
  onChange = () => {},
}) => {
  return withReact(createElement)(AXATextarea.tagName, {
    name,
    label,
    refId,
    placeholder,
    error,
    defaultValue,
    value,
    invalid,
    required,
    disabled,
    checkMark,
    counter,
    counterMax,
    maxLength,
    className,
    onFocus,
    onBlur,
    onChange,
    isReact: true,
  });
};
