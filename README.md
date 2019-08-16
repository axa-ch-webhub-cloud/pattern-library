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
- [Pattern Library Polyfill (IE11)](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill)

## Released Components
- [AXA Button](src/components/10-atoms/button) [![npm version](https://img.shields.io/npm/v/@axa-ch/button.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/button)
- [AXA Button Link]() [![npm version](https://img.shields.io/npm/v/@axa-ch/button-link.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/button-link)
- [AXA Checkbox]() [![npm version](https://img.shields.io/npm/v/@axa-ch/checkbox.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/checkbox)
- [AXA Commercial Hero Banner]() [![npm version](https://img.shields.io/npm/v/@axa-ch/commercial-hero-banner.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/commercial-hero-banner)
- [AXA Container]() [![npm version](https://img.shields.io/npm/v/@axa-ch/container.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/container)
- [AXA Cookie Disclaimer]() [![npm version](https://img.shields.io/npm/v/@axa-ch/cookie-disclaimer.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/cookie-disclaimer)
- [AXA Datepicker]() [![npm version](https://img.shields.io/npm/v/@axa-ch/datepicker.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/datepicker)
- [AXA Dropdown]() [![npm version](https://img.shields.io/npm/v/@axa-ch/dropdown.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/dropdown)
- [AXA Fieldset]() [![npm version](https://img.shields.io/npm/v/@axa-ch/fieldset.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/fieldset)
- [AXA Footer]() [![npm version](https://img.shields.io/npm/v/@axa-ch/footer.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/footer)
- [AXA Footer Small]() [![npm version](https://img.shields.io/npm/v/@axa-ch/footer-small.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/footer-small)
- [AXA Icon]() [![npm version](https://img.shields.io/npm/v/@axa-ch/icon.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/icon)
- [AXA Input File]() [![npm version](https://img.shields.io/npm/v/@axa-ch/input-file.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/input-file)
- [AXA Input Text]() [![npm version](https://img.shields.io/npm/v/@axa-ch/input-text.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/input-text)
- [AXA Link]() [![npm version](https://img.shields.io/npm/v/@axa-ch/link.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/link)
- [AXA Materials]() [![npm version](https://img.shields.io/npm/v/@axa-ch/materials.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/materials)
- [AXA Table]() [![npm version](https://img.shields.io/npm/v/@axa-ch/table.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/table)
- [AXA Table Sortable]() [![npm version](https://img.shields.io/npm/v/@axa-ch/table-sortable.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/table-sortable)
- [AXA Text]() [![npm version](https://img.shields.io/npm/v/@axa-ch/text.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/text)
- [AXA Textarea]() [![npm version](https://img.shields.io/npm/v/@axa-ch/textarea.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/textarea)
- [AXA Top content bar]() [![npm version](https://img.shields.io/npm/v/@axa-ch/top-content-bar.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/top-content-bar)

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
