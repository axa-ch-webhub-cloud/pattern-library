import { Icon } from '../a-icon';

export type Color = 'red' | 'white';
export type Size = 'sm' | 'md' | 'lg';
export type Tag = 'a' | 'button';
export type Type = 'button' | 'submit' | 'reset';
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
  type?: Type;
  href?: string; // todo: urlPropType
  icon?: Icon;
  target?: Target;
  disabled?: boolean;
}

export default interface AXAButton extends HTMLElement, Props {}
