import React from 'react';

interface AXATestimonialsProps {
  title?: string;
  subtitle?: string;
  autorotatedisabled?: boolean;
  autorotatetime?: boolean;
  showallinline?: boolean;
  keysenabled?: boolean;
}

declare function createAXATestimonials(
  createElement: typeof React.createElement
): React.ComponentType<AXATestimonialsProps>;

export = createAXATestimonials;
