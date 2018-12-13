export type IconName =
  'angle-bracket-down'
  | 'checkmark'
  | 'cross-gap'
  | 'facebook'
  | 'linkedin'
  | 'menu'
  | 'twitter'
  | 'youtube'
  | 'arrow'
  | 'chevron-down'
  | 'download'
  | 'instagram'
  | 'logo-AXA'
  | 'search-left'
  | 'xing'
  | 'info-open'
  | 'info-close'
  | '';

export interface AXAIconProps {
  icon: IconName;
  classes: string;
}


export const AXAIcon: React.ComponentClass<AXAIconProps>;
