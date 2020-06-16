import React, { ReactElement } from 'react';
import Page from '../../components/Page';
import SyntaxHighlighter from '../../components/SyntaxHighlighter';

import { NativeLink } from '../../components/NativeLinks';
import IconsPreview from '../../components/IconsPreview';
import ImagesPreview from '../../components/ImagesPreview';

export default function SamplePage(): ReactElement {
  return (
    <Page>
      <p className="paragraph"></p>
      <h2 className="h2 mt-0">Icons</h2>
      <p className="paragraph">
        Functional icons should be used for small resolutions, as they have been
        especially designed to facilitate the navigation
      </p>
      <p className="paragraph">
        The Complete list is{' '}
        <NativeLink href="https://github.com/axa-ch/patterns-library/tree/develop/src/components/00-materials/icons-raw">
          visible on GitHub
        </NativeLink>
        .
      </p>
      <div className="Content-svg">
        <IconsPreview />
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

      <h2 className="h2 mt-0">Images</h2>
      <p className="paragraph">
        Illustrative icons should be used for medium and large resolutions
      </p>
      <div className="Content-svg-illustrations">
        <ImagesPreview />
      </div>
    </Page>
  );
}
