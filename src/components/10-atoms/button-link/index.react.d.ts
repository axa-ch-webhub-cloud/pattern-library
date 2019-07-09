import React from 'react';
import { Icon } from '@axa-ch/icon/lib/index.d';

type Size = 'small' | 'large';
type Variant =
  | 'secondary'
  | 'red'
  | 'inverted'
  | 'inverted-blue-ocean'
  | 'inverted-red-tosca'
  | 'inverted-purple-logan'
  | 'inverted-green-viridian'
  | 'inverted-blue-teal';

interface AXAButtonLinkProps {
  href?: string;
  external?: boolean;
  size?: Size;
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
