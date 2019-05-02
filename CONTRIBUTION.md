# Rules and Lintings

- We export only Web Components. No separate distribution of SASS mixins, JS, HTML and SCSS files.
- We use [prettier](https://prettier.io/).
  - Make sure you install eslint checker and prettier in your IDE

## Style Rules

- We follow DRY, KISS, YAGNI principles when we write SCSS. This includes variables, mixins, etc.
- We remove the linting of ordering and grouping of CSS properties. Only includes have to be at the beginning.
- We won't have settings for vertical rhythm or global spacing.

## JS Rules

- We reuse the Patterns Lib v1 JavaScript linting settings.

## Git Commit Messages

- are prefixed by JIRA/github issue number,
- reasonably self-contained,
- are in English only,
- written in present tense or imperative,
- start with an initial capital letter.

# Testing

- Library uses testcafe for ui testing
- Library uses Jest for unit testing

##UI Testing
TODO

## Unit Testing

### Running Tests

When you run `npm run test-jest`, Jest will launch in the watch mode. Every time you save a file, it will re-run the tests.

### Writing Tests

To create tests, add `it()` (or `test()`) blocks with the name of the test and its code. You may optionally wrap them in `describe()` blocks for logical grouping but this is neither required nor recommended.

Jest provides a built-in expect() global function for making assertions. A basic test could look like this:

```js
import sum from './sum';
it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});
```

### Disabling jsdom

If you know that none of your tests depend on jsdom, you can run `npm run test-jest --env=node`, and your tests will run faster.

### Covergage Reporting

Jest has an integrated coverage reporter that works well with ES6 and requires no configuration.
Run `npm test -- --coverage` (note extra -- in the middle)

### How the create your first Component

Very easy, please start Storybook with `npm run start` and then in another CLI tab run `npm run new` and follow the instructions in the CLI.
