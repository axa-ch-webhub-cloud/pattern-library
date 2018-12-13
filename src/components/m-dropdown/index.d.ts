import * as React from 'react';

export namespace AXADropdown {
  export interface Item {
    name?: string;
    url?: any;
    value?: any;
  }

  export interface Props {
    onAxaChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inFlow?: boolean;
    items?: Item[];
    native?: boolean;
    size?: 'sm';
    title?: string;
    value?: any;
    iconsPathPrefix?: string;
  }
}

export const AXADropdown: React.ComponentClass<AXADropdown.Props>;
