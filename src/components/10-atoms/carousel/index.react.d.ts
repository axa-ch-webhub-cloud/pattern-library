import React from 'react';

interface AXACarouselProps {
  autorotatedisabled?: boolean;
  autorotatetime?: number;
  keysenabled?: boolean;
  className?: string;
}

declare function createAXACarousel(
  createElement: typeof React.createElement
): React.ComponentType<AXACarouselProps>;

export = createAXACarousel;
