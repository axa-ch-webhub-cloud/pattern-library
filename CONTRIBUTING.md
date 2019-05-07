<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [First things first](#first-things-first)
- [Crafting a new component](#crafting-a-new-component)
  - [Conventions](#conventions)
    - [Types of Components](#types-of-components)
    - [CSS](#css)
    - [JS](#js)
    - [HTML](#html)
  - [Scaffolding](#scaffolding)
  - [Custom Elements](#custom-elements)
    - [Key Terms](#key-terms)
      - [Light DOM](#light-dom)
      - [Local DOM](#local-dom)
      - [Flattened DOM](#flattened-dom)
      - [First Class Props](#first-class-props)
    - [Lifecycle Phases](#lifecycle-phases)
      - [`constructor()`](#constructor)
      - [`init()`](#init)
      - [`connectedCallback()`](#connectedcallback)
      - [`contextCallback(contextNode)`](#contextcallbackcontextnode)
      - [`attributeChangedCallback(name, oldValue, newValue)`](#attributechangedcallbackname-oldvalue-newvalue)
      - [Property `setter()`](#property-setter)
      - [`setProps(props)`](#setpropsprops)
      - [`shouldUpdateCallback(newValue, oldValue)`](#shouldupdatecallbacknewvalue-oldvalue)
      - [`willRenderCallback(initial)`](#willrendercallbackinitial)
      - [`didRenderCallback(initial)`](#didrendercallbackinitial)
      - [`disconnectedCallback()`](#disconnectedcallback)
      - [Render Loop](#render-loop)
    - [Higher Order Classes](#higher-order-classes)
      - [`withAllHocs`](#withallhocs)
      - [`withBaseAndAllHocs`](#withbaseandallhocs)
      - [`withBaseGlobalAndAllHocs`](#withbaseglobalandallhocs)
      - [`withBase()`](#withbase)
      - [`withBaseGlobal()`](#withbaseglobal)
      - [`withContext()`](#withcontext)
      - [`withMonkeyPatch()`](#withmonkeypatch)
      - [`withRender()`](#withrender)
      - [`withShadow()`](#withshadow)
      - [`withStyles()`](#withstyles)
      - [`withUpdate()`](#withupdate)
      - [`withVersion()`](#withversion)
  - [Integration](#integration)
    - [`withReact()`](#withreact)
- [How do we release a new version](#how-do-we-release-a-new-version)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# First things first

Setup your IDE to properly integrate with:
 - [EditorConfig](http://editorconfig.org/)
 - [ESLint](https://eslint.org/)
 - [StyleLint](https://stylelint.io/)
 - [NVM](https://github.com/creationix/nvm)

Make sure to be familiar with:
 - [ES6](http://es6-features.org/) and beyond
 - [Babel](https://babeljs.io/)
 - [SCSS](https://sass-lang.com/)
 - [PostCSS](http://postcss.org/)
 - [BEM](http://getbem.com/) or [here](https://en.bem.info/)
 - [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)
 - [WebComponents](https://www.webcomponents.org/), especially [Custom Elements](https://html.spec.whatwg.org/multipage/custom-elements.html)
 - and [SemVer](https://semver.org/)

# Crafting a new component

To help you with adding new components, please make sure to read our following contribution guidelines.

## Conventions

In order to make sure to keep our code maintainable and DRY we agreed to adhere to the following conventions:

- Component-based development
- Hyphenated Atomic [BEM](http://getbem.com/)
- We classify components according to [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) based on it's purpose or function, we never classify based on number of `HTML` elements, e.g. `<label>` can't be used [without](https://stackoverflow.com/questions/12195052/is-it-allowed-to-use-label-tag-without-labeled-control) associated `<input />` elements, therefore the combination of both is an **atom**
- Vanilla Code - as less libraries and frameworks as possible. Use a library/framework if there is a really benefit in time-saving or clean-code.
- Write semantic and accessible code
- Use complementary doclets

### Types of Components

There are basically two types of components:
- **Presentational Components** used to render data, and
- **Container Components** used to manage or extend child components

To facilitate communication between related components we setup and use a context for bidirectional communication between parent/child related components.

### CSS

We stick to hyphenated atomic [BEM](http://getbem.com/) naming for CSS classes as follows:

- Atom prefix `.a-*`
- Molecule prefix `.m-*`
- Organism prefix `.o-*`
- State prefixes `.is-*` or `.has-*`
- Utility prefix `.u-*`
- JS interaction class prefix `.js-*`

**Note:** Never mix prefixes, the general rule is `.prefix-block__element--modifier`. States must include their corresponding block, like `.is|has-block-state`.

**Warning:** Since we can't use shadow DOM we face two major CSS cascade issues:
1. Namespacing - mitigate by atomic BEM
2. [Inherited CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance#Inherited_properties) like `text-align` - [these](https://stackoverflow.com/questions/5612302/which-css-properties-are-inherited) you have to fix by yourself!

### JS

To facilitate custom non-webcomponent integrations we stick to adaptive implementations of interactive JS code, i.e. we consider Web-Components barely as another DOM-Selector layer and pass those DOM-nodes to concrete implementations hosted within the `js/` sub folder. Which could then be called by any DOM-Selecting utility like `jQuery`, `document.querySelector`, you name it.

So we stick to following practises:
- A WebComponent's root DOM element is always named `wcNode`
- All WebComponents are always prefixed like: `<axa-foo>`, `AXAFoo extends HtmlElement`
- Properly manage events, prevent memory leaks

### HTML

Write semantic and valid HTML 5 markup - no `<div>` mess allowed.

## Scaffolding

To help you adding new components fast, we provide an interactive CLI command for scaffolding new components - just follow the instructions by running:

````sh
npm run new
````

This script will:

- Ask which type of component you want to build:
  - type `a` for an atom,
  - type `m` for a molecule or 
  - type `o` for an organism
- Based on your input it will create a new folder with the following structure:
  - `components/(a|m|o)-your-component-name/`
    - `_example.html` - this file contains full-fledged interactive demo code.
    - `_preview.html` - this will be rendered within the **patterns-library** preview.
    - `_template.js` - return the inner HTML of your web component here by [nanohtml](https://github.com/choojs/nanohtml).
    - `index.js` - define your custom element here, by extending our provided JS classes.
    - `index.scss` - here goes your CSS.

## Custom Elements

We stick to the [Custom Elements V1 spec](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements).

There are a few key principles you have to know:
- Custom Elements are **asynchronous**, which means
   - they only render if their definition (JS) is ready - [CustomElementRegistry API](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry)
   - a child could render before it's parent
   - this leads to [**FOUC** (flash of unstyled content)](https://en.wikipedia.org/wiki/Flash_of_unstyled_content)
   - in short - order of rendering is **non-deterministic**
   - though order of definition and Custom Element declaration is key
     1. first custom elements like `<axa-foo>...</axa-foo>` 
     2. last it's definition by JS (at end of body)
- [HTML attributes (always `'string'`)](https://www.w3.org/TR/html5/dom.html#element-definitions-attributes) VS DOM properties ([first class props](#first-class-props))
   - [HTML boolean attributes](https://www.w3.org/TR/html5/infrastructure.html#sec-boolean-attributes) are special, i.e.:
   
      missing attribute -> `false`,
   
      existing attribute `checked`, or empty string value `checked=""` or same value `checked="checked"` -> `true`
- [Key Terms](#key-terms)
- [Lifecycle phases](#lifecycle-phases)

### Key Terms

The following key terms are crucial for efficient web component development!

#### Light DOM

The light DOM are the provided children from the users of your component (light meaning easy to digest).

```html
 <axa-example>
  <div>This is some light DOM for axa-example</div>
 </axa-example>
```

#### Local DOM

The local DOM is the DOM tree rendered by the component itself (in our case provided by `_template.js`).

```js
export default function(props, childrenFragment) {
  return nanohtml`<article>
    ${childrenFragment} <!-- light DOM injection point -->
  </article>`;
}
```

#### Flattened DOM

The flattened DOM is the final product where the user's light DOM is injected into the Components local DOM.

```html
<axa-example>
  <article>
    <div>This is some light DOM for axa-example</div> <!-- light DOM injection point -->
  </article>
</axa-example>
```

#### First Class Props

First class props means that a property can be of any type of:

- `'string'`
- `true` or `false`
- `0` to `Infinty`
- `{ foo: 'bar'}`
- `[1, 2, 3]`
- `null`
- `undefined`

### Lifecycle Phases

A [custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) undergoes various states, from construction, to DOM manipulation, to destruction - it's [lifecycle](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks). It's important to know that only at certain phases DOM manipulation is possible.

**Note:** We provide a few additional lifecycle methods to ease development.

#### `constructor()`

We never use the ~~constructor~~ directly, instead we call [`init()`](#init) for you with the proper context!

**Important:** for same reason we also can't use any  syntactic sugar related to the ~~constructor~~, like [Class field declarations](https://github.com/tc39/proposal-class-fields) including class field with Arrow functions (instead `.bind()` your methods within `init()`).

**Note:** It's a caveat of Babel 6 and support for extended built-in elements polyfill (Safari/webkit only), please see [proper context upgrading within the constructor](https://github.com/WebReflection/document-register-element#v1-caveat) and [You cannot use the constructor in any meaningful way](https://github.com/ungap/custom-elements-builtin#constructor-caveat) for more details.

#### `init()`
The `init()` method can be used to setup stuff like, establishing contexts, event handlers, observers, defining a shadow root, but never for DOM manipulation.
It always starts by calling `super.init(?options)` so that the correct prototype chain is established.

**Important:** for same reason we also can't use any  syntactic sugar related to the ~~constructor~~, like [Class field declarations](https://github.com/tc39/proposal-class-fields) including class field with Arrow functions (instead `.bind()` your methods within `init()`).

**Note:** This method is invoked lazily for you upon first `connectedCallback` or `attributeChangedCallback`.
It's a caveat of Babel 6 and support for extended built-in elements polyfill (Safari/webkit only), please see [proper context upgrading within the constructor](https://github.com/WebReflection/document-register-element#v1-caveat) and [You cannot use the constructor in any meaningful way](https://github.com/ungap/custom-elements-builtin#constructor-caveat) for more details.


#### `connectedCallback()`

Invoked when the custom element is first connected to the document's DOM.
It always starts by calling `super.connectedCallback()` conditionally.

#### `contextCallback(contextNode)`

In case your custom element needs to communicate with a child or parent you are likely in the need of contexts.

#### `attributeChangedCallback(name, oldValue, newValue)`

Invoked when one of the custom element's attributes is added, removed, or changed.
It always starts by calling `super.attributeChangedCallback(name, oldValue, newValue)` conditionally.

**IMPORTANT:**
- attributes are always of type `'string'` and have to be parsed by `JSON.parse()` to provide proper [first class props](#first-class-props)
- a static `observedAttributes()` getter must be defined to make this callback work!
- `observedAttributes()` will be automatically derived from your static [`propTypes`](https://www.npmjs.com/package/prop-types) property. 

```js
import PropTypes from 'prop-types';

class AXAElement extends BaseComponentGlobal {
  // preferred way - observedAttributes derived from your propTypes
  static propTypes = {
    foo: PropTypes.string,
    barBaz: PropTypes.string,
  }

  // only do this if it's different from your propTypes
  static get observedAttributes() { return ['foo', 'bar-baz']; }
}
```

#### Property `setter()`

All observed attributes defined by static `observedAttributes()` getter will be automatically turned in camelcased getter/setter properties, like:

```js
import PropTypes from 'prop-types';

class AXAExample extends BaseComponentGlobal {
  // preferred way - observedAttributes derived from your propTypes
  static propTypes = {
    foo: PropTypes.string,
    exampleMessage: PropTypes.string,
  }

  // only do this if it's different from your propTypes
  static get observedAttributes() { return ['foo', 'example-message']; }
}
```

```html
<axa-example foo="bar" example-message="hello world"></axa-example>
```

```js
const example = document.createElement('axa-example');

example.foo = 'bar';
example.exampleMessage = 'hello world';
```

**Note:** Be careful of choosing your attribute names, never overwrite existing standard attributes without good reason!

#### `setProps(props)`

A fast and simpler way to update multiple props in one go.
Especially useful for integrations and to prevent multiple or delayed re-renders.

#### `shouldUpdateCallback(newValue, oldValue)`

`shouldUpdateCallback()` is invoked upon `attributeChangedCallback()` or Property `setter()` invocation to determine if rendering is necessary when new props are being received - it returns `true` if re-rendering is desireable, else `false`.

**Important:** This does only a shallow comparison, if you need to deal with more complex data, like objects or arrays either stick to immutable data structures or override this method to implement your own test.

#### `willRenderCallback(initial)`

Invoked before the custom element's [flattened DOM](#flattened-dom) will be rendered.

#### `didRenderCallback(initial)`

Invoked after the custom element's [flattened DOM](#flattened-dom) has rendered.

#### `disconnectedCallback()`

Invoked when the custom element is disconnected from the document's DOM.
It always starts by calling `super.disconnectedCallback()` conditionally.

#### Render Loop

The render loop makes sure that upon each [`attributeChangedCallback()`](#attributechangedcallbackname-oldvalue-newvalue) invocation or any observed [property `setter()`](#property-setter) invocation that the flattened DOM is recomputed and that [`willRenderCallback()`](#willrendercallbackinitial) and [`didRenderCallback()`](#didrendercallbackinitial) lifecycle hooks are called respectively.

### Higher Order Classes

Under the hood we defined following encapsulated higher order classes.

**Note:** all of these are already composed to `BaseComponnet` class.

**Caution:** consider that all possible combinations have to be interchangeable and that they result in a [**Factorial**](https://en.wikipedia.org/wiki/Factorial) set of permutations - i.e. our `6` HOCs correlate to `6!` = `720` permutations.

#### `withAllHocs`

A composed HOC with all feature HOCs including [`withContext()`](#withcontext), [`withMonkeyPatch()`](#withmonkeypatch), [`withRender()`](#withrender), [`withStyles()`](#withstyles), [`withUpdate()`](#withupdate)

#### `withBaseAndAllHocs`

A composed HOC with [`withBase()`](#withbase) and [all feature HOCs](#withallhocs).

#### `withBaseGlobalAndAllHocs`

A composed HOC with [`withBase()`](#withbase), [`withBaseGlobal()`](#withbaseglobal) and [all feature HOCs](#withallhocs).

#### `withBase()`

This class handles [proper context upgrading within the constructor](https://github.com/WebReflection/document-register-element#v1-caveat), it adds a unique `_id` and provides a static UUID generator.

#### `withBaseGlobal()`

This class extends the {Base} and applies styles globally by injecting them within `<head>` section.
This is the recommended approach.

#### `withContext()`

Adds the ability to provide and consume contextual data.

#### `withMonkeyPatch()`

Guarantees that updates to the custom element's children do not mess up the [**Flattened DOM**](#flattened-dom) and keeps it's [**Local DOM**](#local-dom) untouched.

**Note:** this is obsolete if `ShadowDOM` is enabled and `<slot>` is utilised.

#### `withRender()`

Adds the ability to render external DOM-based templates, applies changes incrementally by DOM-morphing and provides additional lifecycle hooks.

#### `withShadow()`

Attaches a shadow DOM to the custom element.

#### `withStyles()`

Appends an optional custom element's stylesheet to the document.

#### `withUpdate()`

Adds attribute observation and enables [**First Class Props**](#first-class-props) and runtime type-checking.

#### `withVersion()`

Adds the current `version` from `package.json` to each component.

Query it like:

```js
const AXAButton = customElements.get('axa-button');
console.log(AXAButton.version);

// or by promise
customElements.whenDefined('axa-button')
  .then(() => {
    const AXAButton = customElements.get('axa-button');
    console.log(AXAButton.version);
  });
```

## Integration

The goal is that custom elements can be shared across frameworks and libraries like Angular, React, Vue, you name it. To ease this process we set a static `tagName` property for each custom element and provide generic wrapper functions.

### `withReact()`

To turn any custom element into a working React Component, you just need to follow these steps:

1. `import` React
2. `import` withReact
3. `import` any web components you need
4. wrap all your needed web components
   - and may pass optional options for type of component or event init options
5. use them like regular React components in your app

   **Note:** events work similar to React's standard events, but each web components could trigger custom events like `axa-click` - camelcased and `on`-prefixed in React such as `onAxaClick={yourEventHandler}`. Make sure to check them out at the web-components documentation itself!

```js
// import your dependencies - 1, 2, and 3
import React from 'react';
import withReact from '@axa-ch/patterns-library/src/js/with-react';
import AXAButton from '@axa-ch/patterns-library/dist/components/m-button';

// 4. wrap your needed web components
// and optionally pass options
const AXAButtonReact = withReact(AXAButton, {
  pure: true,
  // event init options are also supported
  passive: false,
});

// 5. use them in your app like regular React components
// note the custom event axa-click - camelcased and on-prefixed in React
const MyApp = ({ color, onClick }) => (
  <AXAButtonReact color={color} onAxaClick={onClick}>Hello World</AXAButtonReact>
);
```

# How do we release a new version

Please run `npm run release` and follow the steps in the wizard.

For more information: We have a strict strategy for releasing new versions of the Patterns Library. Please refer to the wiki: https://github.com/axa-ch/patterns-library/wiki/Crafting-a-release
