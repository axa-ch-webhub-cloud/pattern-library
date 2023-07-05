# Pattern Library
![CI/CD Status](https://github.com/axa-ch-webhub-cloud/pattern-library/actions/workflows/CI.yml/badge.svg?branch=develop)

## [>> Pattern Library Demo](https://axa-ch-webhub-cloud.github.io/plib-feature/develop)

[Check out our Contribution File](https://github.com/axa-ch-webhub-cloud/pattern-library/blob/develop/CONTRIBUTION.md#rules-and-lintings)

[Check out our Architecture File](https://github.com/axa-ch-webhub-cloud/pattern-library/blob/develop/ARCHITECTURE.md)

[Check out our Code of Conduct](https://github.com/axa-ch-webhub-cloud/pattern-library/blob/develop/CODE_OF_CONDUCT.md)

## Design Guidelines
[Link to Styleguide](https://www.figma.com/file/6zurYk3bJpzUg0H2THSxGF/AXA-UI-Kit)

## Communication

Use the following channels for different kinds of requests/reports:

- Bug reports, small change requests, "wishes": [Issues](https://github.com/axa-ch-webhub-cloud/pattern-library/issues)
- Questions, requests for help, requests for product presentations, etc: Slack #patterns-lib-devs
- Feature requests (Components, etc): Contact Webhub Team

## What we deliver

We release self-contained plug-and-play web components based on the [custom elements specification](https://html.spec.whatwg.org/multipage/custom-elements.html), derived from the [lit-element](https://lit.dev/docs/api/LitElement/) base class (maintained by Google).

Pattern Library components are exported to npm with 2 types of build artifacts: `/dist/index.js` and `/lib/index.*` in ES2019.

## Component versioning

Different versions of our web components can coexist on the same web page! Here you can [read more about component versioning](https://github.com/axa-ch-webhub-cloud/pattern-library/blob/develop/COMPONENT_VERSIONING.md).

## Released Components
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

| Component                                                                          | Github Packages                                                                                                                                                                                                                                                                                                                                          |
|------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [AXA Accordion](./src/components/20-molecules/accordion)                           | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F20-molecules%2Faccordion%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/accordion)         |
| [AXA Button](./src/components/10-atoms/button)                                     | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F10-atoms%2Fbutton%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/button)                                     |
| [AXA Carousel](./src/components/10-atoms/carousel)                                 | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F10-atoms%2Fcarousel%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/carousel)                                 |
| [AXA Checkbox](./src/components/10-atoms/checkbox)                                 | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F10-atoms%2Fcheckbox%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/checkbox)                                 |
| [AXA Commercial Hero Banner](./src/components/30-organisms/commercial-hero-banner) | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F30-organisms%2Fcommercial-hero-banner%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/commercial-hero-banner) |
| [AXA Container](./src/components/30-organisms/container)                           | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F30-organisms%2Fcontainer%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/container)                           |
| [AXA Cookie Disclaimer](./src/components/20-molecules/cookie-disclaimer)           | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F20-molecules%2Fcookie-disclaimer%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/cookie-disclaimer)           |
| [AXA Datepicker](./src/components/20-molecules/datepicker)                         | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F20-molecules%2Fdatepicker%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/datepicker)                         |
| [AXA Dropdown](./src/components/20-molecules/dropdown)                             | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F20-molecules%2Fdropdown%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/dropdown)                             |
| [AXA Fieldset](./src/components/10-atoms/fieldset)                                 | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F10-atoms%2Ffieldset%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/fieldset)                                 |
| [AXA File Upload](./src/components/20-molecules/file-upload)                       | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F20-molecules%2Ffile-upload%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/file-upload)                       |
| [AXA Footer](./src/components/30-organisms/footer)                                 | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F30-organisms%2Ffooter%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/footer)                                 |
| [AXA Heading](./src/components/10-atoms/heading)                                   | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F10-atoms%2Fheading%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/heading)                                   |
| [AXA Footer Small](./src/components/20-molecules/footer-small)                     | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F20-molecules%2Ffooter-small%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/footer-small)                     |
| [AXA Icon](./src/components/10-atoms/icon)                                         | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F10-atoms%2Ficon%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/icon)                                         |
| [AXA Input File](./src/components/10-atoms/input-file)                             | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F10-atoms%2Finput-file%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/input-file)                             |
| [AXA Input Text](./src/components/10-atoms/input-text)                             | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F10-atoms%2Finput-text%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/input-text)                             |
| [AXA Link](./src/components/10-atoms/link)                                         | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F10-atoms%2Flink%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/link)                                         |
| [AXA Materials](./src/components/00-materials)                                     | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F00-materials%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/materials)                                       |
| [AXA Policy Features](./src/components/20-molecules/policy-features)               | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F20-molecules%2Fpolicy-features%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/policy-features)               |
| [AXA Popup](./src/components/20-molecules/popup)                                   | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F20-molecules%2Fpopup%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/popup)                                   |
| [AXA Radio](./src/components/10-atoms/radio)                                       | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F10-atoms%2Fradio%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/radio)                                       |
| [AXA Table](./src/components/30-organisms/table)                                   | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F30-organisms%2Ftable%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/table)                                   |
| [AXA Table Sortable](./src/components/30-organisms/table-sortable)                 | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F30-organisms%2Ftable-sortable%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/table-sortable)                 |
| [AXA Text](./src/components/10-atoms/text)                                         | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F10-atoms%2Ftext%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/text)                                         |
| [AXA Textarea](./src/components/10-atoms/textarea)                                 | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F10-atoms%2Ftextarea%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/textarea)                                 |
| [AXA Top Content Bar](./src/components/20-molecules/top-content-bar)               | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F20-molecules%2Ftop-content-bar%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/top-content-bar)               |
| [AXA Modal](./src/components/30-organisms/modal)                                   | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F30-organisms%2Fmodal%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/modal)                                   |
| [AXA Stepper](./src/components/20-molecules/stepper)                               | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F20-molecules%2Fstepper%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/stepper)                               |
| [AXA Testimonials](./src/components/30-molecules/testimonials)                     | [![npm version](https://img.shields.io/badge/dynamic/json?color=blue&label=npm&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Faxa-ch-webhub-cloud%2Fpattern-library%2Fdevelop%2Fsrc%2Fcomponents%2F30-organisms%2Ftestimonials%2Fpackage.json?style=flat)](https://github.com/axa-ch-webhub-cloud/midgard/pkgs/npm/testimonials)                     |

## Code of Conduct

We are dedicated to building a welcoming, diverse, and safe community. We expect everyone participating in the AXA community to read and accept our [Code of Conduct](https://github.com/axa-ch-webhub-cloud/pattern-library/tree/develop/CODE_OF_CONDUCT.md)

## Version Control

This repository is a monorepo managed by Lerna. This means that all components are centrally managed here, even though we publish them to NPM as separate packages.

## Commits

We are using [Conventional Commits](https://www.conventionalcommits.org/) to automatically version the components and update their changelogs.
Feel free to use a [tool of your choice](https://www.conventionalcommits.org/en/about/#tooling-for-conventional-commits) to generate these commits.

Example for a commit message
```
feat(button): add new color blue

Closes #ticket-1234
```

For more examples, especially with BREAKING CHANGES, have a look at the [Conventional Commits Examples](https://www.conventionalcommits.org/en/v1.0.0/#examples).

## Pattern Library via community CDN

You can add any Pattern Library component via the community CDN jsdelivr. This is useful for Prototyping or experimenting or if you don't want to bother with a frontend stack. This works only native (no react support). Here an example on how to add the JS for `<axa-button></axa-button>`: `<script src="https://cdn.jsdelivr.net/npm/@axa-ch/button@latest/dist/index.js"></script>`


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
    
    import createAXAButton from '@axa-ch-webhub-cloud/button/lib/index.react';
    import createAXADropdown from '@axa-ch-webhub-cloud/dropdown/lib/index.react';

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
