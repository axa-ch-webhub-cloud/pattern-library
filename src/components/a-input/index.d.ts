import * as React from 'react';
import { AXAIcon } from '../a-icon';

export namespace AXAInput {
  export interface Props {
    onAxaChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    valid?: boolean;
    inline?: boolean;
    error?: string;
    disabled?: boolean;
    inputId?: string;
    type?: string; // todo: enumerate possible input types
    placeholder?: string;
    value?: string;
    name?: string;
    icon?: AXAIcon.Icon;
  }
}

export const AXAInput: React.ComponentClass<AXAInput.Props>;
