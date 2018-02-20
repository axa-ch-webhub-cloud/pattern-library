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
- Hyphenated Atomic BEM
- Vanilla Code - as less Libraries and frameworks as possible
- Write semantic and accessible code
- Use complementary doclets

### CSS

We stick to hyphenated atomic BEM naming for CSS classes as follows:

- Atom prefix `.a-*`
- Molecule prefix `.m-*`
- Organism prefix `.o-*`
- State prefixes `.is-*` or `.has-*`
- Utility prefix `.u-*`
- JS interaction class prefix `.js-*`

**Note:** Never mix prefixes, the general rule is `.prefix-block__element--modifier`. States must include their corresponding block, like `.is|has-block-state`.

### JS

To facilitate custom non-webcomponent integrations we stick to adaptive implementations of interactive JS code, i.e. we consider Web-Components barely as another DOM-Selector layer and pass those DOM-nodes to concrete implementations hosted within the `js/` sub folder. Which could the be called any DOM-Selecting utility like `jQuery`, `document.querySelector`, you name it.

### HTML

Write semantic and valid HTML 5 markup.

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
  - `components/a-your-component-name/`
    - `_example.html` - this file contains full-fledged interactive demo code.
    - `_preview.html` - this will be rendered within the **patterns-library** preview.
    - `_template.js` - return the inner HTML of your web component here.
    - `index.js` - define your custom element here, by extending our provided JS classes.
    - `index.scss` - here goes your CSS

# How do we release a new version

Please run `npm run release` and follow the steps in the wizard.

For more information: We have a strict strategy for releasing new versions of the Patterns Library. Please refer to the wiki: https://github.com/axa-ch/patterns-library/wiki/Crafting-a-release
