import React from 'react';

export interface AXAInputPhoneProps {
  label?: string;
  errorprefix?: string;
  lang?: string;
  areavalue?: string;
  phonevalue?: string;
  value?: string; // read-only
  className?: string;
  onFocus?: (e?: FocusEvent) => void;
  onBlur?: (e?: FocusEvent) => void;
  onChange?: (e: { target: HTMLInputElement }, invalidFormat: Boolean) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

declare function createAXAInputPhone(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAInputPhoneProps>;

export default createAXAInputPhone;
