import React from 'react';

type Variant = 'light' | 'dark';
type ImagePosition =
  | 'center center'
  | 'top left'
  | 'top right'
  | 'bottom right'
  | 'bottom left';

interface AXACommercialHeroBannerProps {
  className?: string;
  variant?: Variant;
  imagePosition: ImagePosition;
  src: string;
}

declare function createAXACommercialHeroBanner(
  createElement: typeof React.createElement
): React.ComponentType<AXACommercialHeroBannerProps>;

export = createAXACommercialHeroBanner;
