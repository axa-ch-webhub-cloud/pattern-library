# Contribution

## What you need to contribute

- [Node](https://nodejs.org/en/) (v10.15.3), which is the same version that runs on the pipeline.
- [Prettier](https://prettier.io/) - A code styling tool. You don't explicitly need it, but without fitting the ruleset, you will not be able to merge.

## Install and run the AXA Pattern Library

```js
npm install // automatically runs `npm run bootstrap as postinstall hook`
npm start
```

Your site is now running at http://localhost:6006.
Open your code editor of choice and edit your desired component/package in
`src/components`. Save your changes, and the browser will update in real time!

## Rules and Lintings

- We export only Web Components. No separate distribution of SASS mixins, JS, HTML and SCSS files.
- We use [prettier](https://prettier.io/).

### Style Rules

- We follow DRY, KISS, YAGNI principles when we write SCSS. This includes variables, mixins, etc.
- We remove the linting of ordering and grouping of CSS properties. Only includes have to be at the beginning.
- We won't have settings for vertical rhythm or global spacing.

### JS Rules

We reuse the Patterns Lib v1 JavaScript linting settings.

### Git Commit Message Rules

- must be English only,
- must be written in present tense or imperative,
- must start with a verb and initial capital letter.
- are prefixed by JIRA/github issue number,
- reasonably self-contained,

# Testing

- Library uses [TestCafe](https://devexpress.github.io/testcafe/) for ui testing
- Library uses [Jest](https://jestjs.io/) for unit testing

## UI Testing

- Are written in ui.test.js
- A Component should have at least a smoke test

```js
// React smoke test
fixture('Button').page(`${host}/iframe.html?id=your-component-page`);
test('should render a button as reactified component', async t => {
  const button = await Selector(() =>
    document.querySelector(`axa-button[data-test-id="button"]`)
  );
  await t.expect(button.exists).ok();
});
```

## Unit Testing

### How-to write and run tests

- `npm run test-jest` Jest will launch in the watch mode. Every time you save a file, it will re-run the tests.
- Tests should be written with the `it()` function, i.e `it('should render correctly')`.
- You may optionally want to describe and group them in `describe()` blocks.
- Optional: Coverage: Run `npm test -- --coverage`
- Optional: Disable jsDOM via `npm run test-jest --env=node`

```js
import sum from './sum';
it('should sum numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});
```

## Create a new component

### Best Practices

- Never calculate *derived properties* (in the UML sense, cf. [/property](https://www.uml-diagrams.org/derived-property.html)) inside the `firstUpdated` lifecycle method of a component. This method is only executed once, after first render. If properties are expected to change dynamically over time, those derived properties would not be recalculated and therefore could lead to bugs. Instead, either calculate such derived properties in the `updated` (preferred) or `attributeChanged` method or implement them directly inside the `render` method of a component.
- Never use `child.scss` without scoped selectors. DO: `axa-footer-small { span { ... } }` DON'T: `span { ... }`
- Do not write complex code. Sometimes the rule: "If everything fits on one line of code, my code is better" does not apply. Is never about being cool, rather being clear. For exmaple:
-- DO: `if(myArray.indexOf(4) > -1) { ... }`, DON'T `if(~myArray.indexOf(4)) { ... }`. Other Example
-- DO: `const obj = isEvent ? events : attrs;
        obj[name] = props[name];`, DON'T: `(isEvent ? events : attrs)[name] = props[name];`

### How-to create a new component

`npm run new` and follow the instructions in the CLI.

### How-to write a story

- Add a description: `.addDecorator(withMarkdown(Readme))`
- Add a body reset for the story in order to test and showcase 100% width components: `.addDecorator(withBodyReset())`

Example:

```js
/* global document */
import { storiesOf } from '@storybook/html';
import './index';

import withNoBorder from '../../../../.storybook/addons/no-border';
import Readme from './README.md';
storiesOf('Molecules/Top content bar', module)
  .addDecorator(withNoBorder)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add(
    'Top content bar - default',
    () => '<axa-top-content-bar>Some children</axa-top-content-bar>'
  );
```

## How-to release a component

**Do not use the release scripts: ~~`npm run release`~~ or ~~`npm run prerelease`~~**

- Ensure you have an npm account under the `@axa-ch` organisation.
- Run `npm whoami` and in case of you not being logged in: `npm login`
- Create a new _release branch_ that follows this pattern: `release/<component-name>`
- Clean the main and components dependencies:
  - `npx lerna clean`
  - `rm -rf node_modules`
- Run `npm install`.
- Manually add your component to `lerna.json` and remove all not-to-be-released components from the same file.
- Commit and push your lerna.json changes to the release branch.
- Ensure you have the necessary credentials to push to the Githup repo via commandline commands (the following lerna commands do this automatically).
- Run `npm run test && npx lerna version && npx lerna publish from-package`
- Lerna is going to ask you how to update the changed packages. Follow the instructions and keep in mind the semver rules: https://semver.org/
- Lerna will update the component `package.json` with new version numbers and auto-commit/push those.
- Manually undo the removal of all not-to-be-released components in lerna.json, run `npm install` and commit the generated package-lock files to the release branch.
- Merge the release branch to the `develop` branch in order to preserve the new version numbers.
