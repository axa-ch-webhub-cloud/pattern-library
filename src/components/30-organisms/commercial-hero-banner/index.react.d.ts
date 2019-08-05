import React from 'react';

type Variant = 'foo' | 'bar';

interface AXACommercialHeroBannerProps {
  className?: string;
  variant?: Variant;
  onClick?: () => void;
}

declare function createAXACommercialHeroBanner(
  createElement: typeof React.createElement
): React.ComponentType<AXACommercialHeroBannerProps>;

export = createAXACommercialHeroBanner;