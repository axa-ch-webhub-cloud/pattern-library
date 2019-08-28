import withReact from '../../../utils/with-react';
import AXARadio from './index';
import createRefId from '../../../utils/create-ref-id';

export default createElement => ({
  id = '',
  refId = createRefId('axa-radio-'),
  className = '',
  value = '',
  name = '',
  label = '',
  checked,
  disabled,
  button,
  noGap,
  noAutoWidth,
  icon = '',
  error = '',
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
  children,
}) =>
  withReact(createElement)(
    AXARadio.tagName,
    {
      id,
      refId,
      className,
      value,
      name,
      label,
      checked,
      disabled,
      button,
      noGap,
      noAutoWidth,
      icon,
      error,
      onChange,
      onFocus,
      onBlur,
      isReact: true,
    },
    children
  );
