export namespace AXALink {
  export type Color = 'red' | 'white';
  export type Target = '_blank' | '_self';

  export interface Props {
    onClick?: (e: React.MouseEvent) => void;
    color?: Color;
    size?: string;
    motion?: boolean;
    arrow?: boolean;
    href?: any;
    listed?: boolean;
    icon?: string;
    deco?: boolean;
    iconsPathPrefix?: string;
    target?: Target;
  }
}

export interface AXALink extends HTMLElement, AXALink.Props {}
