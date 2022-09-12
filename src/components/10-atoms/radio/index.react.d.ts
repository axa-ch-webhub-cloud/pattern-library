import React from 'react';

export type Item = {
  name: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
};

export type AXARadioChangeEvent = {
  target: Item;
};

export interface AXARadioProps {
  id?: string;
  refId?: string;
  className?: string;
  value?: string;
  name?: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  button?: boolean;
  noGap?: boolean;
  noAutoWidth?: boolean;
  icon?: string;
  error?: string;
  onChange?: (event: AXARadioChangeEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
}

declare function createAXARadio(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXARadioProps>;

export default createAXARadio;
