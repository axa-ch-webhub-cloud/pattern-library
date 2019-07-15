import React from 'react';

interface AXAInputTextProps {
  id?: string;
  name: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  error?: string;
  type?: string;
  invalid?: boolean;
  required?: boolean;
  disabled?: boolean;
  checkMark?: boolean;
  embedded?: boolean;
  isReact?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: () => void;
}

declare function createAXAInputText(
  createElement: typeof React.createElement
): React.ComponentType<AXAInputTextProps>;

export = createAXAInputText;
