import React from 'react';

interface AXALinkProps {
  href: string;
  variant;
  icon;
  external;
  onClick?: () => void;
}

declare function createAXALink(
  createElement: typeof React.createElement
): React.ComponentType<AXALink>;

export = createAXALink;
