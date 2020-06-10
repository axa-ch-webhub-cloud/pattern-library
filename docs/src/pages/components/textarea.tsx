import React, { ReactElement } from 'react';
import Page from '../../components/Page';
import SyntaxHighlighter from '../../components/SyntaxHighlighter';
import { Textarea } from '../../patterns/index';

interface Props {}

export default function TextareaPage({}: Props): ReactElement {
  return (
    <Page>
      <p className="paragraph">
        The {'<axa-textarea>'} component is a wrapper for the HTML{' '}
        {'<textarea>'} element with custom styling and additional functionality,
        e.g. a character counter.
      </p>
      <h2 className="h2">Usage</h2>

      <div className="Preview">
        <Textarea name="">Button</Textarea>
      </div>
      <SyntaxHighlighter>{`
import '@axa-ch/textarea';
...
<axa-textarea></axa-textarea>
  `}</SyntaxHighlighter>

      <h2 className="h2">Variation</h2>
      <div className="Preview">
        <Textarea
          name="newtonslaw"
          required
          label="Newton's law of universal gravitation"
          placeholder="Describe how the universe works…"
        />
      </div>
      <SyntaxHighlighter>{`
<axa-textarea
  name="newtonslaw"
  required
  label="Newton's law of universal gravitation"
  placeholder="Describe how the universe works…"
></axa-textarea>
  `}</SyntaxHighlighter>

      <h2 className="h2">Status</h2>
      <div className="Preview">
        <Textarea
          name="newtonslaw"
          required
          label="Newton's law of universal gravitation"
          placeholder="Describe how the universe works…"
          invalid
          error="Einstein showed Newton was wrong about gravity."
          value="Every mass attracts every other mass in the universe, and the
          gravitational force between two bodies is proportional to the product
          of their masses and inversely proportional to the square of the
          distance between them."
        />
      </div>
      <SyntaxHighlighter>{`
<axa-textarea
  name="newtonslaw"
  label="Newton's law of universal gravitation"
  placeholder="Describe how the universe works…"
  invalid
  error="Einstein showed Newton was wrong about gravity."
  value="Every mass attracts every other mass in the universe, and the gravitational force between two bodies is proportional to the product of their masses and inversely proportional to the square of the distance between them."
></axa-textarea>
  `}</SyntaxHighlighter>
    </Page>
  );
}
