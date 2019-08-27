import React from 'react';

interface AXAPolicyFeaturesItemProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
}

declare function createAXAPolicyFeaturesItem(
  createElement: typeof React.createElement
): React.ComponentType<AXAPolicyFeaturesItemProps>;

export = createAXAPolicyFeaturesItem;
