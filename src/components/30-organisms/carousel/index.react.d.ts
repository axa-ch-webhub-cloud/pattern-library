import React from 'react';

type Variant = 'foo' | 'bar';

interface AXACarouselProps {
  className?: string;
  variant?: Variant;
  onClick?: () => void;
}

declare function createAXACarousel(
  createElement: typeof React.createElement
): React.ComponentType<AXACarouselProps>;

export = createAXACarousel;