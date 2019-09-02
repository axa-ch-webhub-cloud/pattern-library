import React from 'react';

export interface AXAPolicyFeaturesItemProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
}

declare function createAXAPolicyFeaturesItem(
  createElement: typeof React.createElement
): React.ComponentType<AXAPolicyFeaturesItemProps>;

export default createAXAPolicyFeaturesItem;
