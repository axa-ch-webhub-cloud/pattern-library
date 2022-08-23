import React from 'react';
import { Icon } from '@axa-ch/icon/lib/index.d';

export type ButtonType = 'button' | 'submit' | 'reset';
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
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: ButtonType;
  variant?: Variant;
  icon?: Icon;
  size?: Size;
  motionOff?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  slot?: string;
  children?: React.ReactNode;
  href?: string;
  external?: boolean;
}

declare function createAXAButtonLink(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAButtonLinkProps>;

export default createAXAButtonLink;
