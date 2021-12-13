import React from 'react';

export interface AXAInputPhoneProps {
  label: string;
  errorprefix: string;
  lang: string;
  className?: string;
}

declare function createAXAInputPhone(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAInputPhoneProps>;

export default createAXAInputPhone;
