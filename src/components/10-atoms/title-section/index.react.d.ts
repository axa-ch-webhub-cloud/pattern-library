import React from 'react';

type Variant = 'white';

interface AXATitleSectionProps {
  variant?: Variant;
}

declare function createAXATitleSection(
  createElement: typeof React.createElement
): React.ComponentType<AXATitleSectionProps>;

export = createAXATitleSection;
