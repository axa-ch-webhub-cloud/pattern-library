import React from 'react';
import { Icon } from '@axa-ch-webhub-cloud/icon/lib/index.d';

export type Variant = 'secondary' | 'red' | 'inverted';

export interface AXAInputFileProps {
  text: String;
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
  onChange?: (event: Event) => void;
}

declare function createAXAInputFile(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAInputFileProps>;

export default createAXAInputFile;
