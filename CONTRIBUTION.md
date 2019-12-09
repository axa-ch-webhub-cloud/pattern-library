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

- We use [prettier](https://prettier.io/).

### Style Rules

- We follow DRY, KISS, YAGNI principles when we write SCSS. This includes variables, mixins, etc.
- We remove the linting of ordering and grouping of CSS properties. Only includes have to be at the beginning.
- We will not have settings for vertical rhythm or global spacing.

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

- Never calculate _derived properties_ (in the UML sense, cf. [/property](https://www.uml-diagrams.org/derived-property.html)) inside the `firstUpdated` lifecycle method of a component. This method is only executed once, after first render. If properties are expected to change dynamically over time, those derived properties would not be recalculated and therefore could lead to bugs. Instead, either calculate such derived properties in the `updated` (preferred) or `attributeChanged` method or implement them directly inside the `render` method of a component.
- Never use `child.scss` without scoped selectors. DO: `axa-footer-small { span { ... } }` DON'T: `span { ... }`.
- Do not use console logs in the DEMOs because we cannot expect our user to have DEV Tools open
- Never and in any circumstances use bitwise operators
- Never and in any circumstances use `==` over `===`
- Enumerate as many falsy values in your Boolean checks as possible and be aware that `0` and `""` are also falsy.
- The [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) is a very important principle. But even more important is to know exactly when to break it. Sometimes a super DRY climate can lead to over-engineered solutions that end up being unmaintainable :grinning:. There is no rule here, just be careful to not implement a system that is too complex. Lots of options in interfaces or configuration possibilities could be one indicator that the system gets too complex.
- If you have side effects outside of your component (e.g. global event listeners, added DOM nodes) you have to undo those side effects in disconnectedCallback
- Do not write overly complex code. Sometimes the rule: "If everything fits on one line of code, my code is smarter" does not apply. Is never about being cool, rather being clear. Click [here (pod-havarie)](https://github.com/axa-ch/pod-havarie#other-refactorings-from-wtf-code-to-normal-code) to see an example where the DEV wanted to be cool in not using a for loop and made ugly, harldy readable hacks.

Here are some example DO'S and DONT'S:

```js
// DO
  if(myArray.indexOf(4) > -1) { console.log("Here I'm") }
// DON'T
  if(~myArray.indexOf(4)) { ... }

// ----------
// DO
  const tempObject = isEvent ? events : attrs;
  tempObject[name] = props[name];
// DON'T
  (isEvent ? events : attrs)[name] = props[name];

// ----------
// DO
  if(parseInt(myText, 10) === 1) { console.log("Text is number 1") }
// DON'T
  if(+myText === 1) { console.log("Text is number 1") }

// ----------
// DO
  if (selectedIndex === index || parseInt(selectedIndex, 10) === parseInt(index, 10)) {
    return;
  }
// DON'T
  // eslint-disable-next-line eqeqeq
  if (selectedIndex == index) {
    // ==: indices may be number or string
    return;
  }

// ----------
// DO
  const selectedIndex = index || 0;
  const selectedIndex = Math.floor(index) || 0;
  const selectedIndex = Math.floor(parseInt(index, 10)) || 0;
// DON'T
  const selectedIndex = index | 0;
```

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

## Versioning

For us to be able to have multiple versions of components on a webpage, we version the CSS classes. In production, all classes will have a prefix. This prefix makes sure that CSS is targeting only components of the same version and prevent CSS from leaking into other components.

Prefix structure: `nva${COMPONENT_VERSION_BEFORE_PUBLISH}`

**What does that mean?**
`nva` stands for "next version after...". At the time of building, the package.json consists still the version of the previous release. Only upon releasing, our monorepository framework `lerna` will increase the number and publish it. This means, that whenever you see `nva1-2-3_button-link` you have to keep in mind that the version in productions is the version that was released after the number that this prefix is indicating.

**How does the workflow look like with this?**
The developer works on a component as usual. This whole process will not bother during development. As soon as the components gets built, the artifact will contain the prefixes.

**Is there a way to verify that it works before a publish?**
Yes. After the components is built, `npm link` can be run from the components root folder (no the project root folder). After that, anywhere on the computer, this artifact can be used by running `npm link @axa-ch/COMPONENT_NAME`. This will create a symlink directly from your artifact to the destination.
