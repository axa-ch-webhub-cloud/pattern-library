import React from 'react';

export type Variant = 'light' | 'dark';

export interface AXACommercialHeroBannerProps {
  imageSource: string;
  variant?: Variant;
  className?: string;
}

declare function createAXACommercialHeroBanner(createElement: typeof React.createElement, version?: string): React.ComponentType<AXACommercialHeroBannerProps>;

export default createAXACommercialHeroBanner;
