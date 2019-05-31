import React from 'react';

interface AXAInputTextProps {
  id?: string;
  name: string;
  label?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  isReact?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: () => void;
}

declare function createAXAInputText(
  createElement: typeof React.createElement
): React.ComponentType<AXAInputTextProps>;

export = createAXAInputText;
