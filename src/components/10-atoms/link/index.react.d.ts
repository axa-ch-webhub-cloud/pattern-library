import React from 'react';
import { Icon } from '@axa-ch/icon/lib/index.d';

type IconVariant = 'icon' | 'icon-red' | 'icon-white';

type ArrowVariant =
  'arrowright'
  | 'arrowleft'
  | 'arrowleft-animated'
  | 'arrowright-animated'
  | 'arrowright-red'
  | 'arrowleft-red'
  | 'arrowleft-animated-red'
  | 'arrowright-animated-red'
  | 'arrowright-white'
  | 'arrowleft-white'
  | 'arrowleft-animated-white'
  | 'arrowright-animated-white';

type SharedProps = {
  href?: string;
  external?: boolean;
  className?: string;
  slot?: string;
  onClick?: () => void;
};

/**
 * If icon is present, then require variant: IconVariant; otherwise optional variant: ArrowVariant
 */
type AXALinkProps = SharedProps &
  ({ variant?: ArrowVariant } | { variant: IconVariant; icon: Icon });

declare function createAXALink(
  createElement: typeof React.createElement
): React.ComponentType<AXALinkProps>;

export default createAXALink;
