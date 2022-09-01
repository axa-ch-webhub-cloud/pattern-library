# Pattern Library

[![Build Status](https://ach-azureforge-iss.visualstudio.com/Patterns-Library/_apis/build/status/CI_patterns-library?branchName=develop)](https://ach-azureforge-iss.visualstudio.com/Patterns-Library/_build/latest?definitionId=115&branchName=develop)
![Deployment Status](https://ach-azureforge-iss.vsrm.visualstudio.com/_apis/public/Release/badge/4ad0f0a6-2ec1-465f-99a1-4c3726de6d35/1/3)

## [>> Pattern Library Demo](https://axa-ch-webhub-cloud.github.io/plib-feature/develop)

[Check out our Contribution File](https://github.com/axa-ch-webhub-cloud/pattern-library/blob/develop/CONTRIBUTION.md#rules-and-lintings)

[Check out our Architecture File](https://github.com/axa-ch-webhub-cloud/pattern-library/blob/develop/ARCHITECTURE.md)

[Check out our Code of Conduct](https://github.com/axa-ch-webhub-cloud/pattern-library/blob/develop/CODE_OF_CONDUCT.md)

## Communication

Use the following channels for different kinds of requests/reports:

- Bug reports, small change requests, "wishes": https://github.com/axa-ch-webhub-cloud/pattern-library/issues
- Questions, requests for help, requests for product presentations, etc: Slack #patterns-lib-devs
- Feature requests (Components, etc): Slack @martin.stuedle

## What we deliver

We release self-contained plug-and-play web components based on the [custom elements specification](https://html.spec.whatwg.org/multipage/custom-elements.html), derived from the [lit-element](https://lit.dev/docs/api/LitElement/) base class (maintained by Google).

## Pattern Library via community CDN

You can add any Pattern Library component via the community CDN jsdelivr. This is useful for Prototyping or experimenting or if you don't want to bother with a frontend stack. This works only native (no react support). Here an example on how to add the JS for `<axa-button></axa-button>`: `<script src="https://cdn.jsdelivr.net/npm/@axa-ch/button@latest/dist/index.js"></script>`

## Build Pattern Library components in your own application

Pattern Library components are exported to npm with 2 types of build artifacts: `/dist/index.js` and `/lib/index.*` in ES2019. If you use the Pattern Library in AXA's DX WebHub context, you don't have to worry about this topic. All others, please read on.

The de-facto standard in the frontend community is to render `/lib` exports as ESM, i.e. **ES5** + **import/export**. Due to the nature of web components and lit-element, however, we are forced to export in ES6. For more details, see the [custom element specification](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-autonomous-example).

If you need to support Internet Explorer (11) in your application, you therefore need to **transpile** our component (/lib) artifacts in your build. To do so, you need to **include** the path to our components (@axa-ch) and their underlying framework (lit) in the section of your transpilation configuration that describes transpilation to ES5. Here is an example snippet of how this would look in a webpack config:

```
{
  test: /.js$/,
  include: [
    /src/,
    new RegExp(`node_modules${sep}lit`),
    new RegExp(`node_modules${sep}@axa-ch(?!${sep}patterns-library-polyfill)`),
  ],
  use: {
    loader: 'babel-loader',
    options: {
      ...babelrc,
    },
  },
},
```

## Component versioning

Different versions of our web components can coexist on the same web page! Here you can [read more about component versioning](https://github.com/axa-ch-webhub-cloud/pattern-library/blob/develop/COMPONENT_VERSIONING.md).

## Released Polyfills

- [Pattern Library Polyfill (IE11)](https://github.com/axa-ch-webhub-cloud/pattern-library/tree/develop/src/components/05-utils/polyfill)

## Released Components
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

| Component                                                                          | npmjs.com                                                                                                                                                  |
|------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [AXA Accordion](./src/components/20-molecules/accordion)                           | [![npm version](https://img.shields.io/npm/v/@axa-ch/accordion.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/accordion)                           |
| [AXA Button](./src/components/10-atoms/button)                                     | [![npm version](https://img.shields.io/npm/v/@axa-ch/button.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/button)                                 |
| [AXA Carousel](./src/components/10-atoms/carousel)                                 | [![npm version](https://img.shields.io/npm/v/@axa-ch/carousel.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/carousel)                             |
| [AXA Checkbox](./src/components/10-atoms/checkbox)                                 | [![npm version](https://img.shields.io/npm/v/@axa-ch/checkbox.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/checkbox)                             |
| [AXA Commercial Hero Banner](./src/components/30-organisms/commercial-hero-banner) | [![npm version](https://img.shields.io/npm/v/@axa-ch/commercial-hero-banner.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/commercial-hero-banner) |
| [AXA Container](./src/components/30-organisms/container)                           | [![npm version](https://img.shields.io/npm/v/@axa-ch/container.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/container)                           |
| [AXA Cookie Disclaimer](./src/components/20-molecules/cookie-disclaimer)           | [![npm version](https://img.shields.io/npm/v/@axa-ch/cookie-disclaimer.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/cookie-disclaimer)           |
| [AXA Datepicker](./src/components/20-molecules/datepicker)                         | [![npm version](https://img.shields.io/npm/v/@axa-ch/datepicker.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/datepicker)                         |
| [AXA Dropdown](./src/components/20-molecules/dropdown)                             | [![npm version](https://img.shields.io/npm/v/@axa-ch/dropdown.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/dropdown)                             |
| [AXA Fieldset](./src/components/10-atoms/fieldset)                                 | [![npm version](https://img.shields.io/npm/v/@axa-ch/fieldset.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/fieldset)                             |
| [AXA File Upload](./src/components/20-molecules/file-upload)                       | [![npm version](https://img.shields.io/npm/v/@axa-ch/file-upload.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/file-upload)                       |
| [AXA Footer](./src/components/30-organisms/footer)                                 | [![npm version](https://img.shields.io/npm/v/@axa-ch/footer.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/footer)                                 |
| [AXA Heading](./src/components/10-atoms/heading)                                   | [![npm version](https://img.shields.io/npm/v/@axa-ch/heading.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/heading)                               |
| [AXA Footer Small](./src/components/20-molecules/footer-small)                     | [![npm version](https://img.shields.io/npm/v/@axa-ch/footer-small.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/footer-small)                     |
| [AXA Icon](./src/components/10-atoms/icon)                                         | [![npm version](https://img.shields.io/npm/v/@axa-ch/icon.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/icon)                                     |
| [AXA Input File](./src/components/10-atoms/input-file)                             | [![npm version](https://img.shields.io/npm/v/@axa-ch/input-file.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/input-file)                         |
| [AXA Input Text](./src/components/10-atoms/input-text)                             | [![npm version](https://img.shields.io/npm/v/@axa-ch/input-text.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/input-text)                         |
| [AXA Link](./src/components/10-atoms/link)                                         | [![npm version](https://img.shields.io/npm/v/@axa-ch/link.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/link)                                     |
| [AXA Materials](./src/components/00-materials)                                     | [![npm version](https://img.shields.io/npm/v/@axa-ch/materials.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/materials)                           |
| [AXA Policy Features](./src/components/20-molecules/policy-features)               | [![npm version](https://img.shields.io/npm/v/@axa-ch/policy-features.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/policy-features)               |
| [AXA Popup](./src/components/20-molecules/popup)                                   | [![npm version](https://img.shields.io/npm/v/@axa-ch/popup.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/popup)                                   |
| [AXA Radio](./src/components/10-atoms/radio)                                       | [![npm version](https://img.shields.io/npm/v/@axa-ch/radio.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/radio)                                   |
| [AXA Table](./src/components/30-organisms/table)                                   | [![npm version](https://img.shields.io/npm/v/@axa-ch/table.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/table)                                   |
| [AXA Table Sortable](./src/components/30-organisms/table-sortable)                 | [![npm version](https://img.shields.io/npm/v/@axa-ch/table-sortable.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/table-sortable)                 |
| [AXA Text](./src/components/10-atoms/text)                                         | [![npm version](https://img.shields.io/npm/v/@axa-ch/text.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/text)                                     |
| [AXA Textarea](./src/components/10-atoms/textarea)                                 | [![npm version](https://img.shields.io/npm/v/@axa-ch/textarea.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/textarea)                             |
| [AXA Top Content Bar](./src/components/20-molecules/top-content-bar)               | [![npm version](https://img.shields.io/npm/v/@axa-ch/top-content-bar.svg?style=flat)](https://www.npmjs.com/package/@axa-ch/top-content-bar)               |

## Alpha-Released Components

- None            

## Design Guidelines

[Link to Styleguide](https://www.figma.com/file/6zurYk3bJpzUg0H2THSxGF/AXA-UI-Kit)

## How to contribute

Whether you are helping us to fix bugs, or you are more into creating components,
we would love to have you as contributor of the AXA Pattern Library!

Check out our [Contributing Guide](https://github.com/axa-ch-webhub-cloud/pattern-library/tree/develop/CONTRIBUTION.md) for ideas on contributing and setup steps for getting the repository up and running on your local machine.

## Code of Conduct

We are dedicated to building a welcoming, diverse, and safe community. We expect everyone participating in the AXA community to read and accept our [Code of Conduct](https://github.com/axa-ch-webhub-cloud/pattern-library/tree/develop/CODE_OF_CONDUCT.md)

## Version Control

This repository is a monorepo managed by Lerna. This means that all components are centrally managed here, even though we publish them to NPM as separate packages.

## How do I get my (unit) tests to work when using Pattern Library components?

### The problem
Unit-test frameworks like Jest run under the `node` environment, which is quite different from a browser. The most commonly used abstraction to mimic a minimal browser within `node` is `jsdom`. However, `jsdom` lacks crucial features such as `Mutation Observer`, `Custom Elements` and other browser APIs commonly needed by web components.

### Solutions
So what are your options?

- Insisting on `jest`, one option would be to use a better DOM emulation. Exchanging `jsdom` with `happydom`, we now have enough emulated browser features to test web components. The details are described [here](https://github.com/capricorn86/happy-dom/tree/master/packages/jest-environment).
- Instead of using `jest`, employ end-to-end (e2e) testing tools that control a real browser, e.g. `Playwright`, `Cypress` or `Testcafe`. Arguably this is a better match for UI-heavy apps anyway, because e2e tests are closer to a real user experience.
- Use a lightweight mocking strategy. The idea is to mock pattern library components by a simple, traditional-HTML replacement such as a &lt;div&gt; or a &lt;button&gt;. Here is a code sketch using Jest that employs this strategy:
    ```
    All Pattern-Library React components are imported from this index.js.
    
    import createAXAButton from '@axa-ch/button/lib/index.react';
    import createAXADropdown from '@axa-ch/dropdown/lib/index.react';

    export const AXAButton = createAXAButton(createElement);
    export const AXADropdown = createAXADropdown(createElement);
  
    AXAButton.displayName = 'AXAButton';
    AXADropdown.displayName = 'AXADropdown';
    ```
    ```
    __mocks__/index.js
  
    export const AXAButton = (props) => {
    return <button {...props}>{props.children}</button>;
    };
    ...
    ```

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
- By.cssSelector

## Dealing with F(lash) O(f) U(nstyled) C(ontent)

As described in [ARCHITECTURE.md](https://github.com/axa-ch-webhub-cloud/pattern-library/tree/develop/ARCHITECTURE.md), FOUC can be mitigated by using the CSS pseudo-selector: `:not(:defined)`. Below please find an example of how we can show to the user that the `<axa-footer>` is not yet defined (pulsating blocks). The selector `:not(:defined)` won't work in **IE11** and therefore there won't have any effect on it. Following the principle of graceful degradation, this is fine, since the only downside in **IE11** is that it doesn't look as good as the other browsers while no real functionality has been lost.

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
