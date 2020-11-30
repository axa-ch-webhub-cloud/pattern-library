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

- [Jest](https://jestjs.io/) for unit testing
- [Playwright](https://playwright.dev/) for UI tests
- Deprecated: ~~TestCafe](https://devexpress.github.io/testcafe/) for UI tests~~
## UI Testing

- A Component should have at least a smoke test
- Test file name: `pw.ui.test.js`

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
- Never use `child.scss` without scoped selectors. DO: `axa-footer-small { span { ... } }` DON'T: `span { ... }`.
- Never use axa- component tags in selectors to refer to _dependent components_, since these tags are [versioned](https://github.com/axa-ch/patterns-library/blob/develop/COMPONENT_VERSIONING.md). Use classes instead. DO: `axa-top-content-bar .m-top-content-bar__button { ... }` DON'T: `axa-top-content-bar axa-button { ... }`
- Do not use console logs in the DEMOs because we cannot expect our user to have DEV Tools open
- Never and in any circumstances use bitwise operators
- Never and in any circumstances use `==` over `===`
- Enumerate as many falsy values in your Boolean checks as possible and be aware that `0` and `""` are also falsy.
- The [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) is a very important principle. But even more important is to know exactly when to break it. Sometimes a super DRY climate can lead to over-engineered solutions that end up being unmaintainable :grinning:. There is no rule here, just be careful to not implement a system that is too complex. Lots of options in interfaces or configuration possibilities could be one indicator that the system gets too complex.
- If you have side effects outside of your component (e.g. global event listeners, added DOM nodes) you have to undo those side effects in disconnectedCallback
- Do not write overly complex code. Sometimes the rule: "If everything fits on one line of code, my code is smarter" does not apply. Is never about being cool, rather being clear. Click [here (pod-havarie)](https://github.com/axa-ch/pod-havarie#other-refactorings-from-wtf-code-to-normal-code) to see an example where the DEV wanted to be cool in not using a for loop and made ugly, hardly readable hacks.

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

Please see [Storybook documentation](https://storybook.js.org/docs/react/writing-stories/introduction) for details.

## How-to release a component

- Ensure you have an npm account under the `@axa-ch` organisation.
- (Optional) Run `npm whoami` and in case of you not being logged in: `npm login`
- Ensure you have admin rights on github
- Switch to branch `develop` and run `npm run release`. Follow the guidelines in the CLI

## Branch Deployment

Whenever a push to a branch happens, which is represented by a pull request, the branch will automatically be deployed to github pages and is publicly accessible.
As soon as the branch is deployed, there will appear a slack notification in the `#plib-deployments` channel in Slack (workspace: axa-ch).

There is also a mechanism to issue such a deployment manually, at any commit, during development (without opening a pull request and without the rest of the CIs overhead).

To issue a manual branch deployment, use this command from the root folder of the pattern library:

`GITHUB_TOKEN="<github_personal_access_token>" SLACK_TOKEN="<slack_token>" npm run deploy-branch`

Obtain a slack token here: https://api.slack.com/custom-integrations/legacy-tokens
Generate a personal access token for your github account here: https://github.com/settings/tokens

You can also add those tokens to your global environment variables, so that you do not have to provide them all the time with this command.
