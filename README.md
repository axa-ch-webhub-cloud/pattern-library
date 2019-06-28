# Pattern Library v2

[![Build Status](https://travis-ci.org/axa-ch/patterns-library.svg?branch=develop)](https://travis-ci.org/axa-ch/patterns-library)
![Deployment Status](https://ach-azureforge-iss.vsrm.visualstudio.com/_apis/public/Release/badge/4ad0f0a6-2ec1-465f-99a1-4c3726de6d35/1/3)

## [>> Pattern Library Demo](https://patterns.axa.ch)

[Check out our Contribution File](https://github.com/axa-ch/patterns-library/blob/develop/CONTRIBUTION.md#rules-and-lintings)

[Check out our Architecture File](https://github.com/axa-ch/patterns-library/blob/develop/ARCHITECTURE.md)

[Check out our Code of Conduct](https://github.com/axa-ch/patterns-library/blob/develop/CODE_OF_CONDUCT.md)

## Communication

Use the following channels for different kinds of requests/reports:
- Bug reports, small change requests, "wishes": https://github.com/axa-ch/patterns-library/issues
- Questions, requests for help, requests for product presentations, etc: Slack #patterns-lib-devs
- Feature requests (Components, etc): Slack @martin.stuedle

## What we deliver
We release self-contained plug-and-play web components based on the [custom elements specification](https://html.spec.whatwg.org/multipage/custom-elements.html), derived from the [lit-element](https://github.com/Polymer/lit-element) base class (maintained by Google).

## Released Polyfills
- [AXA Polyfills](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill)

## Released Components
- [AXA Button](https://github.com/axa-ch/patterns-library/tree/develop/src/components/10-atoms/button)
- [AXA Button Link](https://github.com/axa-ch/patterns-library/tree/develop/src/components/10-atoms/button-link)
- [AXA Checkbox](https://github.com/axa-ch/patterns-library/tree/develop/src/components/10-atoms/checkbox)
- [AXA Container](https://github.com/axa-ch/patterns-library/tree/develop/src/components/30-organisms/container)
- [AXA Cookie Disclaimer](https://github.com/axa-ch/patterns-library/tree/develop/src/components/20-molecules/cookie-disclaimer)
- [AXA Datepicker](https://github.com/axa-ch/patterns-library/tree/develop/src/components/20-molecules/datepicker)
- [AXA Dropdown](https://github.com/axa-ch/patterns-library/tree/develop/src/components/20-molecules/dropdown)
- [AXA Icon](https://github.com/axa-ch/patterns-library/tree/develop/src/components/10-atoms/icon)
- [AXA Input File](https://github.com/axa-ch/patterns-library/tree/develop/src/components/10-atoms/input-file)
- [AXA Input Text](https://github.com/axa-ch/patterns-library/tree/develop/src/components/10-atoms/input-text)
- [AXA Materials](https://github.com/axa-ch/patterns-library/tree/develop/src/components/00-materials)
- [AXA Link](https://github.com/axa-ch/patterns-library/tree/develop/src/components/10-atoms/link)
- [AXA Fieldset](https://github.com/axa-ch/patterns-library/tree/develop/src/components/10-atoms/fieldset)
- [AXA Footer Small](https://github.com/axa-ch/patterns-library/tree/develop/src/components/20-molecules/footer-small)
- [AXA Table Sortable](https://github.com/axa-ch/patterns-library/tree/develop/src/components/30-organisms/table-sortable)
- [AXA Table](https://github.com/axa-ch/patterns-library/tree/develop/src/components/30-organisms/table)
- [AXA Top content bar](https://github.com/axa-ch/patterns-library/tree/develop/src/components/20-molecules/top-content-bar)
- [AXA Footer](https://github.com/axa-ch/patterns-library/tree/develop/src/components/30-organisms/footer)

## Alpha-Released Components
- 

## Design Guidelines
[Link to Pattern Library Styleguide](https://github.com/axa-ch/patterns-library-styleguide)

## How to contribute
Whether you are helping us to fix bugs, or you are more into creating components,
we would love to have you as contributor of the AXA Pattern Library!

Check out our [Contributing Guide](https://github.com/axa-ch/patterns-library/tree/develop/CONTRIBUTION.md) for ideas on contributing and setup steps for getting the repository up and running on your local machine.

## Code of Conduct
We are dedicated to building a welcoming, diverse, and safe community. We expect everyone participating in the AXA community to read and accept our [Code of Conduct](https://github.com/axa-ch/patterns-library/tree/develop/CODE_OF_CONDUCT.md)

## Version Control
This repository is a monorepo managed by Lerna. This means that all components are centrally managed here, even though we publish them to NPM as separate packages.

## Testing with Enzyme or similar test frameworks
At the moment, our wrapped custom elements display as an `<Unknown>` tag in React Dev Tools. Therefore, if Enzyme selection methods like `wrapper.find(AXAButton)` do not work as expected, please add a display name to your mounted React component like so:

```js
import { createElement } from 'react';

import createAXAButtonReact from '@axa-ch/button/lib/index.react';

export const AXAButton = createAXAButtonReact(createElement);

AXAButton.displayName = 'AXAButton';
```
In the future, the Pattern Library will take care of this automatically.
