# Pattern Library v2

[![Build Status](https://ach-azureforge-iss.visualstudio.com/Patterns-Library/_apis/build/status/CI_patterns-library?branchName=develop)](https://ach-azureforge-iss.visualstudio.com/Patterns-Library/_build/latest?definitionId=115&branchName=develop)
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
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

| Component                                                                          | npmjs.com                                                                                                                                                  |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [AXA Button](./src/components/10-atoms/button)                                     | [![npm version](https://img.shields.io/npm/v/@axa-ch/button.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/button)                                 |
| [AXA Button Link](./src/components/10-atoms/button-link)                           | [![npm version](https://img.shields.io/npm/v/@axa-ch/button-link.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/button-link)                       |
| [AXA Checkbox](./src/components/10-atoms/checkbox)                                 | [![npm version](https://img.shields.io/npm/v/@axa-ch/checkbox.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/checkbox)                             |
| [AXA Commercial Hero Banner](./src/components/30-organisms/commercial-hero-banner) | [![npm version](https://img.shields.io/npm/v/@axa-ch/commercial-hero-banner.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/commercial-hero-banner) |
| [AXA Container](./src/components/30-organisms/container)                           | [![npm version](https://img.shields.io/npm/v/@axa-ch/container.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/container)                           |
| [AXA Cookie Disclaimer](./src/components/20-molecules/cookie-disclaimer)           | [![npm version](https://img.shields.io/npm/v/@axa-ch/cookie-disclaimer.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/cookie-disclaimer)           |
| [AXA Datepicker](./src/components/20-molecules/datepicker)                         | [![npm version](https://img.shields.io/npm/v/@axa-ch/datepicker.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/datepicker)                         |
| [AXA Dropdown](./src/components/20-molecules/dropdown)                             | [![npm version](https://img.shields.io/npm/v/@axa-ch/dropdown.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/dropdown)                             |
| [AXA Fieldset](./src/components/10-atoms/fieldset)                                 | [![npm version](https://img.shields.io/npm/v/@axa-ch/fieldset.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/fieldset)                             |
| [AXA File Upload](./src/components/20-molecules/file-upload)                       | [![npm version](https://img.shields.io/npm/v/@axa-ch/file-upload.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/file-upload)                       |
| [AXA Footer](./src/components/30-organisms/footer)                                 | [![npm version](https://img.shields.io/npm/v/@axa-ch/footer.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/footer)                                 |
| [AXA Footer Small](./src/components/20-molecules/footer-small)                     | [![npm version](https://img.shields.io/npm/v/@axa-ch/footer-small.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/footer-small)                     |
| [AXA Icon](./src/components/10-atoms/icon)                                         | [![npm version](https://img.shields.io/npm/v/@axa-ch/icon.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/icon)                                     |
| [AXA Input File](./src/components/10-atoms/input-file)                             | [![npm version](https://img.shields.io/npm/v/@axa-ch/input-file.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/input-file)                         |
| [AXA Input Text](./src/components/10-atoms/input-text)                             | [![npm version](https://img.shields.io/npm/v/@axa-ch/input-text.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/input-text)                         |
| [AXA Link](./src/components/10-atoms/link)                                         | [![npm version](https://img.shields.io/npm/v/@axa-ch/link.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/link)                                     |
| [AXA Materials](./src/components/00-materials)                                     | [![npm version](https://img.shields.io/npm/v/@axa-ch/materials.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/materials)                           |
| [AXA Popup](./src/components/20-molecules/popup)                                   | [![npm version](https://img.shields.io/npm/v/@axa-ch/popup.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/popup)                           |
| [AXA Radio](./src/components/10-atoms/radio)                                       | [![npm version](https://img.shields.io/npm/v/@axa-ch/radio.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/radio)                           |
| [AXA Table](./src/components/30-organisms/table)                                   | [![npm version](https://img.shields.io/npm/v/@axa-ch/table.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/table)                                   |
| [AXA Table Sortable](./src/components/30-organisms/table-sortable)                 | [![npm version](https://img.shields.io/npm/v/@axa-ch/table-sortable.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/table-sortable)                 |
| [AXA Text](./src/components/10-atoms/text)                                         | [![npm version](https://img.shields.io/npm/v/@axa-ch/text.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/text)                                     |
| [AXA Textarea](./src/components/10-atoms/textarea)                                 | [![npm version](https://img.shields.io/npm/v/@axa-ch/textarea.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/textarea)                             |
| [AXA Top Content Bar](./src/components/20-molecules/top-content-bar)               | [![npm version](https://img.shields.io/npm/v/@axa-ch/top-content-bar.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/top-content-bar)               |

## Alpha-Released Components

- None            

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

### Testing in create react app v3+

If you want to have [Jest](https://jestjs.io/) tests in [Create React App](https://github.com/facebook/create-react-app/) here an example on how we added them: [commit link to patterns library examples](https://github.com/axa-ch/patterns-library-examples/commit/870f94420239e9c99cd25a6050e078375d64a815). Keep in mind that this is just an example and some configs might not be needed for your case.

Refering to the commit diff: cleaner would be to have, instead of the `.babelrc` that adds the babel preset `"@babel/react"`, the preset directly inside `config/jest/jestPreprocess.js`

### Testing with Selenium, Testcafe and other UI testing tools

By default, pattern-library web components make use of [ShadowDOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM). To trigger interactions inside such web component you need to access the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) via the [ShadowRoot](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot). Schematically,  this works like this: **UI Testtool -> Driver -> native DOM selector -> ShadowRoot -> querySelector**

Here is a concrete example in Java using Selenium:

```java
public WebElement expandRootElement(WebElement element, WebDriver driver) {
    WebElement ele = (WebElement) ((JavascriptExecutor) driver)
            .executeScript("return arguments[0].shadowRoot",element);
    return ele;
}
```
Calling this method gives you the `ShadowRoot` in your Selenium environment. **Beware**: when calling `findElement` on the return value of `expandRootElement` only the following selectors will work:

- By.id
- By.className
- By.cssSelektor

## Dealing with F(lash) O(f) U(nstyled) C(ontent)

As described in [ARCHITECTURE.md](https://github.com/axa-ch/patterns-library/tree/develop/ARCHITECTURE.md), FOUC can be mitigated by using the CSSpseudo selector: `:not(:defined)`. Below please find an example of how we can show to the user that the `<axa-footer>` is not yet defined (pulsating blocks). The selector `:not(:defined)` won't work in **IE11** and therefore there won't have any effect on it. Following the principle of graceful degradation, this if fine, since the only downside in **IE11** is that it doesn't look as good as the other browsers while no real functionality has been lost.

```html
<style>
  axa-footer:not(:defined) {
    background-color: #3b3fd8;
    color: #3b3fd8;
    display: block;
  }

  axa-footer:not(:defined) svg {
    display: none;
  }

  axa-footer:not(:defined) a {
    color: #FFF;
    background: #FFF;
    display: inline-block;
    margin-left: 10px;
    pointer-events: none;
    margin-top: 10px;
    opacity: 0.2;
    transition:opacity 500ms ease-out;
    animation: pulseloadingaxafooter 1s infinite;
  }

  @keyframes pulseloadingaxafooter {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 0.2;
  }
}
</style>
```
