import React from 'react';
import { Icon } from '@axa-ch/icon/lib/index.d';

type Variant = 'secondary' | 'red' | 'inverted';

interface AXAButtonLinkProps {
  href?: string;
  external?: boolean;
  variant?: Variant;
  icon?: Icon;
  large?: boolean;
  motionOff?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

declare function createAXAButtonLink(
  createElement: typeof React.createElement
): React.ComponentType<AXAButtonLinkProps>;

export = createAXAButtonLink;
