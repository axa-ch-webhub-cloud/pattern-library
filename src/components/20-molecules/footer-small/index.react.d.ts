import React from 'react';
import { link } from 'fs';

interface Item {
  text: string;
  link: string;
}

// Not polished/finalised yet. Just an example.
interface AXAFooterSmallProps {
  languageItems: Item[];
  disclaimerItems: Item[];
  copyrightText: String;
  activeLanguage: String;
  dynamic: boolean;
}

declare function createAXAFooterSmall(createElement: typeof React.createElement): React.ComponentType<AXAFooterSmallProps>;

export = createAXAFooterSmall;
