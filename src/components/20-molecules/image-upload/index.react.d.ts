import React from 'react';

type Variant = 'foo' | 'bar';

interface AXAImageUploadProps {
  variant?: Variant;
  onClick?: () => void;
}

declare function createAXAImageUpload(
  createElement: typeof React.createElement
): React.ComponentType<AXAImageUploadProps>;

export = createAXAImageUpload;