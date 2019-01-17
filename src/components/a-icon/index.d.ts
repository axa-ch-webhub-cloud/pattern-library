export type Icon =
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

export interface Props {
  icon: Icon;
  classes: string;
}

export default interface AXAIcon extends HTMLElement, Props {
}
