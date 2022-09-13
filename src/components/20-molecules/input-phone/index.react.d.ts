import React from 'react';

export interface AXAInputPhoneProps {
  invalid?: boolean;
  disabled?: boolean;
  label?: string;
  error?: string;
  lang?: string;
  countrycode?: string;
  countryflags?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

declare function createAXAInputPhone(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAInputPhoneProps>;

export default createAXAInputPhone;
