import React from 'react';

export type Variant = 'axa-blue' | 'wild-sand' | 'white';

export interface AXAPolicyFeaturesProps {
  title: string;
  variant?: Variant;
  className?: string;
  children?: React.ReactNode;
}

export declare function createAXAPolicyFeaturesReact(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAPolicyFeaturesProps>;

export interface AXAPolicyFeaturesItemProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
}

export declare function createAXAPolicyFeaturesItemReact(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAPolicyFeaturesItemProps>;

export default createAXAPolicyFeaturesReact;
