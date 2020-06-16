import React, { ReactElement } from 'react';
import Page from '../../components/Page';
import SyntaxHighlighter from '../../components/SyntaxHighlighter';
import { Input } from '../../patterns';

export default function InputPage(): ReactElement {
  return (
    <Page>
      <p className="paragraph">
        The {'<axa-input-text>'} component is a wrapper for the HTML {'<input>'}{' '}
        element with custom styling and additional functionality. It accepts
        most of the same properties as HTML {'<input>'}, but with typerestricted
        to type=text, type=email, or type=password.
      </p>
      <div className="Preview">
        <Input name="fullname" type="text" />
      </div>
      <SyntaxHighlighter>{`
import '@axa-ch/input-text';
...
<axa-input-text></axa-input-text>
  `}</SyntaxHighlighter>

      <h2 className="h2">Type</h2>
      <div className="Preview">
        <Input
          name="fullname"
          type="text"
          label="Full name"
          placeholder="Albert Einstein"
        />
        <Input
          name="email"
          type="email"
          label="Email"
          placeholder="alert@science.cool"
        />
        <Input
          name="password"
          type="password"
          label="Password"
          placeholder="*******"
        />
      </div>
      <SyntaxHighlighter>{`
<axa-input-text type="text"></axa-input-text>
<axa-input-text type="email"></axa-input-text>
<axa-input-text type="password"></axa-input-text>
  `}</SyntaxHighlighter>

      <h2 className="h2">Status</h2>
      <div className="Preview">
        <Input
          name="username"
          type="text"
          label="User name"
          placeholder="alberteinstein"
          invalid
          error="This username already exist, please choose another one"
        />
      </div>
      <SyntaxHighlighter>{`
<axa-input-text
  name="username"
  type="text"
  label="User name"
  placeholder="alberteinstein"
  invalid
  error="This username already exist, please choose another one"
></axa-input-text>
  `}</SyntaxHighlighter>
    </Page>
  );
}
