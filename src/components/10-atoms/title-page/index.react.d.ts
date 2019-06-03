import React from 'react';

type Variant = 'foo' | 'bar';

interface AXATitlePageProps {
  variant?: Variant;
  onClick?: () => void;
}

declare function createAXATitlePage(
  createElement: typeof React.createElement
): React.ComponentType<AXATitlePageProps>;

export = createAXATitlePage;