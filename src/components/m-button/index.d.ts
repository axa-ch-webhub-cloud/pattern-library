import { IconName } from '../a-icon';

export type AXAButtonColor = 'red' | 'white';
export type AXAButtonSize = 'sm' | 'md' | 'lg';
export type AXAButtonTag = 'a' | 'button';
export type AXAButtonTarget = '_blank' | '_self';


export interface AXAButtonProps {
  onAxaClick?: (e: React.MouseEvent) => void;
  arrow?: boolean;
  classes?: string;
  color?: AXAButtonColor;
  ghost?: boolean;
  motion?: boolean;
  size?: AXAButtonSize;
  tag?: AXAButtonTag;
  href?: string; // todo: urlPropType
  icon?: IconName;
  target?: AXAButtonTarget;
  disabled?: boolean;
}

export const AXAButton: React.ComponentClass<AXAButtonProps>;
