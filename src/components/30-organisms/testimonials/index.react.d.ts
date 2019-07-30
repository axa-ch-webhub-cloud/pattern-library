import React from 'react';

type Variant = 'foo' | 'bar';

interface AXATestimonialsProps {
  variant?: Variant;
  onClick?: () => void;
}

declare function createAXATestimonials(
  createElement: typeof React.createElement
): React.ComponentType<AXATestimonialsProps>;

export = createAXATestimonials;