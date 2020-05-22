import React, { ReactElement } from 'react';
import Page from '../../components/Page';
import SyntaxHighlighter from '../../components/SyntaxHighlighter';
import { Input, Button, ButtonLink, Checkbox } from '../../patterns';

import loginImage from '../../images/login-illustration.jpg';

interface Props {}

export default function LoginPage({}: Props): ReactElement {
  return (
    <Page>
      <p className="paragraph">
        The login process is very specific and may vary a lot between entities
        and countries. Unfortunately, we couldn’t create guidelines for every
        single login process. Please apply these general design principles, and
        if needed, we will be happy to collaborate on a specific process with
        you.
      </p>
      <h2 className="h2">Usage</h2>

      <div className="Preview" style={{ maxWidth: 880, padding: 0 }}>
        <div className="flex align-center">
          <div className="col">
            <img src={loginImage} alt="" className="Content-image mt-0" />
          </div>
          <div className="col pl-7 pr-7">
            <h2 className="h3">Secure Member Log-in</h2>
            <Input
              name="email"
              type="text"
              label="Email"
              placeholder="albert@science.cool"
            />
            <Input
              name="password"
              type="password"
              label="Password"
              placeholder="*******"
            />
            <Checkbox
              label="Remember me"
              variant="checkmark"
              className="mt-3"
            />
            <Button size="large" className="mt-3 w-100">
              Login
            </Button>
            <div className="mt-3">
              <ButtonLink
                variant="secondary"
                size="large"
                icon="arrow-right"
                className="w-100"
              >
                First connexion
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
      <SyntaxHighlighter>{`
<h1 className="h3">Secure Member Log-in</h1>
<Input
  name="email"
  type="text"
  label="Email"
  placeholder="albert@science.cool"
/>
<Input
  name="password"
  type="password"
  label="Password"
  placeholder="*******"
/>
<Button size="large" className="mt-3">
  Login
</Button>
<Checkbox label="Remember me" variant="checkmark" className="mt-3" />
<div className="mt-3">
  <ButtonLink variant="secondary" size="large" icon="arrow-right">
    First connexion
  </ButtonLink>
</div>
  `}</SyntaxHighlighter>
    </Page>
  );
}
