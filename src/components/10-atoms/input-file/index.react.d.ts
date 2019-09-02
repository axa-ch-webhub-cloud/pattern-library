import React from 'react';
import { Icon } from '@axa-ch/icon/lib/index.d';

type Variant = 'secondary' | 'red' | 'inverted';

export interface AXAInputFileProps {
  variant?: Variant;
  icon?: Icon;
  id?: String;
  large?: boolean;
  motionOff?: boolean;
  disabled?: boolean;
  accept?: String;
  multiple?: boolean;
  capture?: boolean;
  className?: string;
  slot?: string;

  onChange?: () => void;
}

declare function createAXAInputFile(
  createElement: typeof React.createElement
): React.ComponentType<AXAInputFileProps>;

export default createAXAInputFile;
