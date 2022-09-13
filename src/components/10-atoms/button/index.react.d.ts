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

export interface AXAButtonProps {
  type?: ButtonType;
  variant?: Variant;
  icon?: Icon;
  size?: Size;
  motionOff?: boolean;
  disabled?: boolean;
  className?: string;
  slot?: string;
  children?: React.ReactNode;
  href?: string;
  external?: boolean;
  onClick?: (event: MouseEvent) => void;
}

declare function createAXAButton(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAButtonProps>;

export default createAXAButton;
