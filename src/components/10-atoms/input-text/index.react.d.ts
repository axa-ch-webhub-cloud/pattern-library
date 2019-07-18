import React from 'react';

interface AXAInputTextProps {
  id?: string;
  name: string;
  label?: string;
  placeholder?: string;
  value?: string | number;
  defaultValue?: string;
  error?: string;
  type?: string;
  invalid?: boolean;
  required?: boolean;
  disabled?: boolean;
  checkMark?: boolean;
  embedded?: boolean;
  isReact?: boolean;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

declare function createAXAInputText(
  createElement: typeof React.createElement
): React.ComponentType<AXAInputTextProps>;

export = createAXAInputText;
