import React from 'react';

export interface AXAInputPhoneProps {
  label: string;
  errorprefix: string;
  lang?: string;
  defaultarea?: string;
  value?: Object;
  className?: string;
}

declare function createAXAInputPhone(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAInputPhoneProps>;

export default createAXAInputPhone;
