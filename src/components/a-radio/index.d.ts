import * as React from 'react';

export namespace AXARadio {
  export interface Props {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputId?: string;
    error?: boolean;
    value?: string;
    name: string;
    checked?: boolean;
    disabled?: boolean;
  }
}

export const AXARadio: React.ComponentClass<AXARadio.Props>;
