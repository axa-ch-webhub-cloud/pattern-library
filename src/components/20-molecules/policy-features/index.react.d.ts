import React from 'react';

type Variant = 'axa-blue' | 'wild-sand' | 'white';

interface AXAPolicyFeaturesProps {
  title: string;
  variant?: Variant;
  className?: string;
}

declare function createAXAPolicyFeatures(
  createElement: typeof React.createElement
): React.ComponentType<AXAPolicyFeaturesProps>;

export = createAXAPolicyFeatures;
