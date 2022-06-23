import React from 'react';
import { Icon } from '@axa-ch/icon/lib/index.d';

export type Size = 'small' | 'large';
export type Variant =
  | 'secondary'
  | 'red'
  | 'inverted'
  | 'inverted-blue-ocean'
  | 'inverted-red-tosca'
  | 'inverted-purple-logan'
  | 'inverted-green-viridian'
  | 'inverted-blue-teal';

export interface AXAButtonLinkProps
  extends React.LinkHTMLAttributes<HTMLLinkElement> {
  href?: string;
  external?: boolean;
  size?: Size;
  variant?: Variant;
  icon?: Icon;
  large?: boolean;
  motionOff?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  slot?: string;
  children?: React.ReactNode;
}

declare function createAXAButtonLink(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAButtonLinkProps>;

export default createAXAButtonLink;
