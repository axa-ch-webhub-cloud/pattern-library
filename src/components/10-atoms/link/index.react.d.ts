import React from 'react';
import { Icon } from '@axa-ch/icon/lib/index.d';

export type IconVariant = 'icon' | 'icon-red' | 'icon-white';

export type ArrowVariant =
  | 'arrowright'
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

export type Variant =
  | ArrowVariant
  | 'red'
  | 'white'
  | 'hyperlink-white'
  | 'hyperlink-white-underline'
  | 'hyperlink-red'
  | 'hyperlink-red-underline';

export type SharedProps = {
  href?: string;
  external?: boolean;
  className?: string;
  slot?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

/**
 * If icon is present, then require variant: IconVariant; otherwise optional variant: Variant
 */
export type AXALinkProps = SharedProps &
  ({ variant?: Variant } | { variant: IconVariant; icon: Icon });

declare function createAXALink(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXALinkProps>;

export default createAXALink;
