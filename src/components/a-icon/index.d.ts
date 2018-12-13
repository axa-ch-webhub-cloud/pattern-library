import * as React from 'react';

export namespace AXAIcon {
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
}

export const AXAIcon: React.ComponentClass<AXAIcon.Props>;
