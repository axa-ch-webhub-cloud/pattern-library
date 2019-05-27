# Pattern Library v2

[![Build Status](https://travis-ci.org/axa-ch/patterns-library.svg?branch=develop)](https://travis-ci.org/axa-ch/patterns-library)

## [>> Pattern Library Demo](https://patterns.axa.ch)

[Check out our Contribution File](https://github.com/axa-ch/patterns-library/blob/develop/CONTRIBUTION.md#rules-and-lintings)
[Check out our Architecture File](https://github.com/axa-ch/patterns-library/blob/develop/ARCHITECTURE.md)
[Check out our Code of Conduct](https://github.com/axa-ch/patterns-library/blob/develop/CODE_OF_CONDUCT.md)

## Communication

Use the following channels for different kinds of requests/reports:
- Bug, small change, "wish": https://github.com/axa-ch/patterns-library/issues
- Questions, ask for help, request product presentations, etc: Slack #patterns-lib-devs
- Feature requests (Components, etc): Slack @martin.stuedle

## What we deliver
We release holistic and self contained WebComponents based on the [custom elements specification](https://html.spec.whatwg.org/multipage/custom-elements.html), wrapped by [LitElement](https://github.com/Polymer/lit-element) (maintained by Google).

## Released Polyfills
- [AXA Polyfills](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill)

## Released Components
- [AXA Button](https://github.com/axa-ch/patterns-library/tree/develop/src/components/10-atoms/button)
- [AXA Button Link](https://github.com/axa-ch/patterns-library/tree/develop/src/components/10-atoms/button-link)
- [AXA Checkbox](https://github.com/axa-ch/patterns-library/tree/develop/src/components/10-atoms/checkbox)
- [AXA Container](https://github.com/axa-ch/patterns-library/tree/develop/src/components/30-organisms/container)
- [AXA Icon](https://github.com/axa-ch/patterns-library/tree/develop/src/components/10-atoms/icon)
- [AXA Link](https://github.com/axa-ch/patterns-library/tree/develop/src/components/10-atoms/link)
- [AXA Fieldset](https://github.com/axa-ch/patterns-library/tree/develop/src/components/10-atoms/fieldset)
- [AXA Footer Small](https://github.com/axa-ch/patterns-library/tree/develop/src/components/20-molecules/footer-small)
- [AXA Table Sortable](https://github.com/axa-ch/patterns-library/tree/develop/src/components/30-organisms/table-sortable)
- [AXA Table](https://github.com/axa-ch/patterns-library/tree/develop/src/components/30-organisms/table)
- [AXA Top content bar](https://github.com/axa-ch/patterns-library/tree/develop/src/components/20-molecules/top-content-bar)

## Alpha Released Components
- [AXA Datepicker](https://github.com/axa-ch/patterns-library/tree/develop/src/components/20-molecules/datepicker)
- [AXA Dropdown](https://github.com/axa-ch/patterns-library/tree/develop/src/components/20-molecules/dropdown)

## How to contribute
Whether you are helping us to fix bugs, or creating components,
we would love to have you as contributor of the AXA Pattern Library!

Check out our [Contributing Guide](https://github.com/axa-ch/patterns-library/tree/develop/CONTRIBUTION.md) for ideas on contributing and setup steps for getting the repository up and running on your local machine.

## Code of Conduct
We are is dedicated to building a welcoming, diverse, safe community. We expect everyone participating in the AXA community to read and accept our [Code of Conduct](https://github.com/axa-ch/patterns-library/tree/develop/CODE_OF_CONDUCT.md)

A note on how this repository is organized
This repository is a monorepo managed using Lerna. This means all components are managed in this codebase, even though we publish them to NPM as separate packages.
