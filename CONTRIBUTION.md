# Contribution

## Install the AXA Pattern Library

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
  - Make sure you install eslint checker and prettier in your IDE

### Style Rules

- We follow DRY, KISS, YAGNI principles when we write SCSS. This includes variables, mixins, etc.
- We remove the linting of ordering and grouping of CSS properties. Only includes have to be at the beginning.
- We won't have settings for vertical rhythm or global spacing.

### JS Rules

- We reuse the Patterns Lib v1 JavaScript linting settings.

### Git Commit Message Rules

- must be English only,
- must be written in present tense or imperative,
- must start with a verb and initial capital letter.
- are prefixed by JIRA/github issue number,
- reasonably self-contained,

# Testing

- Library uses testcafe for ui testing
- Library uses Jest for unit testing

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

- `npm run test-jest` // Jest will launch in the watch mode. Every time you save a file, it will re-run the tests.
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

### How-to start a new component

- `npm run start`
- `npm run new` and follow the instructions in the CLI.

### How-to write a story

- Add a description: `.addDecorator(withMarkdown(Readme))`
- Add a body reset for the story in order to test and showcase 100% width components: `.addDecorator(withBodyReset())`

Example:

```js
/* global document */
import { storiesOf } from '@storybook/html';
import './index';

import withBodyReset from '../../../../.storybook/addons/reset-body';
import Readme from './README.md';
storiesOf('Molecules/Top content bar', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })  .addDecorator(withBodyReset())
  .add(
    'Top content bar - default',
    () => '<axa-top-content-bar>Some children</axa-top-content-bar>'
  );
```

## How-to release a component

- Ensure you have an npm account under the `@axa-ch` organisation
- Create a new branch that follows this pattern: `release/<component-name>`
- Add your component to `lerna.json`
- Clean the main and components dependencies:
  - `rm -rf node_modules`
  - `npx lerna clean`
- Run `npm install`
- Run `npm run release` or `npm run prerelease`
- If you need to release after a alpha release on the same branch without changes: `npm whoami && lerna bootstrap --hoist && npm run build && npm run test && lerna version && lerna publish from-package`
- Lerna is going to ask you how to update the changed packages. Follow the instructions and keep in mind the semver rules: https://semver.org/
