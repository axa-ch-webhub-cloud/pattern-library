import * as React from 'react';
import { AXAIcon } from '../a-icon';

export namespace AXAButton {
  export type Color = 'red' | 'white';
  export type Size = 'sm' | 'md' | 'lg';
  export type Tag = 'a' | 'button';
  export type Target = '_blank' | '_self';

  export interface Props {
    onAxaClick?: (e: React.MouseEvent) => void;
    arrow?: boolean;
    classes?: string;
    color?: Color;
    ghost?: boolean;
    motion?: boolean;
    size?: Size;
    tag?: Tag;
    href?: string; // todo: urlPropType
    icon?: AXAIcon.Icon;
    target?: Target;
    disabled?: boolean;
  }
}

export const AXAButton: React.ComponentClass<AXAButton.Props>;
