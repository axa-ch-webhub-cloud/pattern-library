import React from 'react';

export type Icon =
  | 'add'
  | 'arrow-left'
  | 'arrow-right'
  | 'collapse'
  | 'document'
  | 'download'
  | 'email'
  | 'expand'
  | 'mobile'
  | 'phone'
  | 'search'
  | 'upload'
  | 'cloud-upload'
  | 'axa-logo'
  | 'axa-logo-open'
  | String;

export type Size = 'small' | 'medium' | 'large' | 'original';

export interface AXAIconProps {
  icon?: Icon;
  size?: Size;
}

declare function createAXAIconReact(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAIconProps>;
