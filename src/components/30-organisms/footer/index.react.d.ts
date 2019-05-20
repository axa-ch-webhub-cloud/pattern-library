import React from 'react';

interface Icon {
  title: String;
  link: String;
}

interface Social {
  title: String;
  icons: Icon[];
}

interface Item {
  text: String;
  link: String;
  external?: Boolean;
}

interface Content {
  title: String;
  items: Item[];
}

interface AXAFooterProps {
  content: Content[];
  social: Social;
}

declare function createAXAFooter(
  createElement: typeof React.createElement
): React.ComponentType<AXAFooterProps>;

export = createAXAFooter;
