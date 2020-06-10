import React, { ReactElement } from 'react';
import Page from '../../components/Page';
import SyntaxHighlighter from '../../components/SyntaxHighlighter';
import { ButtonLink } from '../../patterns';

interface Props {}

export default function ButtonLinkPage({}: Props): ReactElement {
  return (
    <Page>
      <p className="paragraph">
        Button links provide link functionality, but in the style of a button.
        They may display text, icons, or both. Button links can be styled via
        several properties to change their look-and-feel.
      </p>
      <h2 className="h2">Usage</h2>

      <ButtonLink href="#axa">I am a Button Link</ButtonLink>

      <SyntaxHighlighter>{`
import '@axa-ch/button-link';
...
<axa-button-link>I am a button link</axa-button-link>
  `}</SyntaxHighlighter>
    </Page>
  );
}
