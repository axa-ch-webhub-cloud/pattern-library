import React from 'react';

export interface AXAInputPhoneProps {
  label: string;
  errorprefix: string;
  lang?: string;
  areavalue?: string;
  phonevalue?: string;
  onChange?: () => void;
  value?: string; // read-only
  className?: string;
}

declare function createAXAInputPhone(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAInputPhoneProps>;

export default createAXAInputPhone;
