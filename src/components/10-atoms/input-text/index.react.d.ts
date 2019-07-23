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
  isReact?: boolean;
  className?: string;
  onFocus?: (e?: FocusEvent) => void;
  onBlur?: (e?: FocusEvent) => void;
  onChange?: (e?: UIEvent) => void;
}

declare function createAXAInputText(
  createElement: typeof React.createElement
): React.ComponentType<AXAInputTextProps>;

export = createAXAInputText;
