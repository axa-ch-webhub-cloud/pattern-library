import React, { ReactElement } from 'react';
import Page from '../../components/Page';
import SyntaxHighlighter from '../../components/SyntaxHighlighter';

import { ReactComponent as AxaLogoSvg } from '../../images/tmp-folder-to-make-the-build-happy-we-should-drop-this/images-raw/axa-logo.svg';
import { ReactComponent as AxaLogoOpenSvg } from '../../images/tmp-folder-to-make-the-build-happy-we-should-drop-this/images-raw/axa-logo-open.svg';

export default function LogoPage(): ReactElement {
  return (
    <Page>
      <p className="paragraph">
        AXA icons are designed to help users navigate more intuitively within
        AXA’s online and offline assets, to spot relevant information more
        easily, and to understand better AXA offers.
      </p>

      <div className="Preview">
        <AxaLogoSvg className="w-8  mr-3" />
        <AxaLogoOpenSvg className="w-8" color="#02038f" />
      </div>
      <div className="Preview bg-black">
        <AxaLogoSvg className="w-8 mr-3" />
        <AxaLogoOpenSvg className="w-8" color="white" />
      </div>
      <SyntaxHighlighter>{`
npm install @axa-ch/materials
`}</SyntaxHighlighter>

      <SyntaxHighlighter>{`
import { svg } from 'lit-html';
import {
  ArrowRightSvg
} from '@axa-ch/materials/icons';
...
<span>\${svg(ArrowRightSvg)}</span>
  `}</SyntaxHighlighter>
    </Page>
  );
}
