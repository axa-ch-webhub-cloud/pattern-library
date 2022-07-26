import React from 'react';

export type Variant = 'axa-blue' | 'wild-sand' | 'white';

export interface AXAPolicyFeaturesProps {
  title: string;
  variant?: Variant;
  className?: string;
  children?: React.ReactNode;
}

export declare function createAXAPolicyFeatures(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAPolicyFeaturesProps>;

export interface AXAPolicyFeaturesItemProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
}

export declare function createAXAPolicyFeaturesItem(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAPolicyFeaturesItemProps>;

export default createAXAPolicyFeatures;
