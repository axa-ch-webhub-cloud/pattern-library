import React from 'react';

type Variant = 'foo' | 'bar';

interface AXAPolicyFeaturesProps {
  variant?: Variant;
  onClick?: () => void;
}

declare function createAXAPolicyFeatures(
  createElement: typeof React.createElement
): React.ComponentType<AXAPolicyFeaturesProps>;

export = createAXAPolicyFeatures;