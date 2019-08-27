import withReact from '../../../utils/with-react';
import AXAInputFile from './index';
import createRefId from '../../../utils/create-ref-id';

export default createElement => ({
  icon = '',
  refId = `input-file-${createRefId()}`,
  variant = '',
  motionOff = false,
  disabled = false,
  onChange,
  children,
  accept = 'image/jpg, image/jpeg, application/pdf, image/png',
  capture = false,
  multiple = false,
  className = '',
  slot = '',
}) =>
  withReact(createElement)(
    AXAInputFile.tagName,
    {
      icon,
      refId,
      variant,
      motionOff,
      disabled,
      onChange,
      accept,
      capture,
      multiple,
      className,
      slot,
    },
    children
  );
