import React from 'react';
import { Icon } from '@axa-ch/icon/lib/index.d';

type ButtonType = 'button' | 'submit' | 'reset';
type Variant = 'secondary' | 'red' | 'inverted';

interface AXAButtonProps {
  type?: ButtonType;
  variant?: Variant;
  icon?: Icon;
  large?: boolean;
  motionOff?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

declare function createAXAButton(
  createElement: typeof React.createElement
): React.ComponentType<AXAButtonProps>;

export = createAXAButton;
