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
   - they only render if their definition (JS) is ready
   - a child could render before it's parent
   - this leads to **FOUC**
   - in short - order of rendering is **non-deterministic**
- HTML attributes (always `'string'`) VS DOM properties ([first class props](#first-class-props))
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

The constructor can be used to setup stuff like, establishing contexts, event handlers, observers, defining a shadow root, but never for DOM manipulation.
It always starts by calling `super()` so that the correct prototype chain is established.

#### `connectedCallback()`

Invoked when the custom element is first connected to the document's DOM.

#### `contextCallback(contextNode)`

In case your custom element needs to communicate with a child or parent you are likely in the need of contexts.

#### `attributeChangedCallback(name, oldValue, newValue)`

Invoked when one of the custom element's attributes is added, removed, or changed.

**IMPORTANT:**
- attributes are always of type `'string'` and have to be parsed by `JSON.parse()` to provide proper [first class props](#first-class-props)
- a static `observedAttributes()` getter must be defined to make this callback work!

```js
static get observedAttributes() { return ['foo', 'bar']; }
```

#### Property `setter()`

All observed attributes defined by static `observedAttributes()` getter will be automatically turned in camelcased getter/setter properties, like:

```js
class AXAExample extends BaseComponentGlobal {
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

#### `willRenderCallback(initial)`

Invoked before the custom element's [flattened DOM](#flattened-dom) will be rendered.

#### `didRenderCallback(initial)`

Invoked after the custom element's [flattened DOM](#flattened-dom) has rendered.

#### `disconnectedCallback()`

Invoked when the custom element is disconnected from the document's DOM.

#### Render Loop

The render loop makes sure that upon each [`attributeChangedCallback()`](#attributechangedcallbackname-oldvalue-newvalue) invocation or any observed [property `setter()`](#property-setter) invocation that the flattened DOM is recomputed and that [`willRenderCallback()`](#willrendercallbackinitial) and [`didRenderCallback()`](#didrendercallbackinitial) lifecycle hooks are called respectively.

# How do we release a new version

Please run `npm run release` and follow the steps in the wizard.

For more information: We have a strict strategy for releasing new versions of the Patterns Library. Please refer to the wiki: https://github.com/axa-ch/patterns-library/wiki/Crafting-a-release
