import React from 'react';

export interface AXATestimonialsProps {
  title?: string;
  subtitle?: string;
  autorotatedisabled?: boolean;
  autorotatetime?: number;
  showallinline?: boolean;
  keysenabled?: boolean;
}

declare function createAXATestimonials(createElement: typeof React.createElement, version?: string): React.ComponentType<AXATestimonialsProps>;

export default createAXATestimonials;
