import React from 'react';

export interface AXACarouselProps {
  autorotatedisabled?: boolean;
  autorotatetime?: number;
  keysenabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

declare function createAXACarouselReact(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXACarouselProps>;
