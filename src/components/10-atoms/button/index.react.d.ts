import React from 'react';
import { Icon } from '@axa-ch/icon/lib/index.d';

type ButtonType = 'button' | 'submit' | 'reset';
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

interface AXAButtonProps {
  type?: ButtonType;
  variant?: Variant;
  icon?: Icon;
  size?: Size;
  motionOff?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

declare function createAXAButton(
  createElement: typeof React.createElement
): React.ComponentType<AXAButtonProps>;

export = createAXAButton;
