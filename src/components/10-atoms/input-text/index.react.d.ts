import React from 'react';

export interface AXAInputTextProps {
  refId?: string;
  name: string;
  label?: string;
  placeholder?: string;
  value?: string | number;
  currency?: string;
  defaultValue?: string;
  error?: string;
  type?: string;
  info?: string;
  invalid?: boolean;
  required?: boolean;
  disabled?: boolean;
  checkMark?: boolean;
  maxLength?: number;
  counter?: string;
  counterMax?: string;
  isReact?: boolean;
  className?: string;
  pattern?: string;
  inputmode?: string;
  autofocus?: boolean;
  readonly?: boolean;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
  onChange?: (event: InputEvent, invalidFormat: Boolean) => void;
  onKeyDown?: (event: KeyboardEvent) => void;
  onKeyUp?: (event: KeyboardEvent) => void;
}

declare function createAXAInputText(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAInputTextProps>;

export default createAXAInputText;
