import React, { ReactElement } from 'react';
import Page from '../../components/Page';
import SyntaxHighlighter from '../../components/SyntaxHighlighter';
import { Sample } from '../../patterns/index';

interface Props {}

export default function SamplePage({}: Props): ReactElement {
  return (
    <Page>
      <p className="paragraph"></p>
      <h2 className="h2">Usage</h2>

      <div className="Preview">
        <Sample>Button</Sample>
      </div>
      <SyntaxHighlighter>{`
import '@axa-ch/commercial-hero-banner';
...
  `}</SyntaxHighlighter>

      <h2 className="h2">Variation</h2>
    </Page>
  );
}
