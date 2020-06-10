import React, { ReactElement } from 'react';
import Page from '../../components/Page';
import SyntaxHighlighter from '../../components/SyntaxHighlighter';
import { Button } from '../../patterns/index';

interface Props {}

export default function ButtonPage({}: Props): ReactElement {
  return (
    <Page>
      <p className="paragraph">
        Buttons are CTAs that allow users to make choices and take actions
      </p>
      <h2 className="h2">Usage</h2>
      <p className="paragraph">
        Buttons are typically placed throughout your UI, in places like:
      </p>
      <ul className="ul">
        <li className="li">Dialogs</li>
        <li className="li">Modal windows</li>
        <li className="li">Forms</li>
        <li className="li">Cards</li>
        <li className="li">Toolbars</li>
      </ul>

      <div className="Preview">
        <Button>Button</Button>
      </div>
      <SyntaxHighlighter>{`
import '@axa-ch/button';
...
<axa-button>
  Button
</axa-button>
  `}</SyntaxHighlighter>

      <h2 className="h2">Variation</h2>

      <div className="Preview">
        <Button className="mr-3" variant="primary">
          primary
        </Button>
        <Button className="mr-3" variant="secondary">
          secondary
        </Button>
        <Button className="mr-3" variant="red">
          red
        </Button>
      </div>
      <div className="Preview bg-black">
        <Button variant="inverted">inverted</Button>
      </div>

      <SyntaxHighlighter>{`
<axa-button>
  Small size
</axa-button>
<axa-button variant="secondary">
  Medium size
</axa-button>
<axa-button variant="red">
  Large size
</axa-button>
  `}</SyntaxHighlighter>

      <h2 className="h2">Sizes</h2>
      <div className="Preview">
        <Button className="mr-3" size="small">
          Small size
        </Button>
        <Button className="mr-3">Normal size</Button>
        <Button className="mr-3" size="large">
          Large size
        </Button>
      </div>
      <SyntaxHighlighter>{`
<axa-button size="small">
  Small size
</axa-button>
<axa-button>
  Medium size
</axa-button>
<axa-button size="large">
  Large size
</axa-button>
  `}</SyntaxHighlighter>

      <h2 className="h2">State</h2>
      <div className="Preview">
        <Button className="mr-3">Normal size</Button>
        <Button className="mr-3" disabled={true}>
          Normal size
        </Button>
      </div>
      <SyntaxHighlighter>{`
<axa-button>
  Normal size
</axa-button>
<axa-button disabled>
  I am disabled
</axa-button>
  `}</SyntaxHighlighter>
    </Page>
  );
}
