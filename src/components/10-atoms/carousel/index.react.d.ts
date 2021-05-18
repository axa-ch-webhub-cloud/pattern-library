import React from 'react';

export interface AXACarouselProps {
  autorotatedisabled?: boolean;
  autorotatetime?: number;
  keysenabled?: boolean;
  className?: string;
}

declare function createAXACarousel(createElement: typeof React.createElement, version?: string): React.ComponentType<AXACarouselProps>;

export default createAXACarousel;
