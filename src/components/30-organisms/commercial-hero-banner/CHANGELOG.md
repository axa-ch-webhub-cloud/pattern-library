## 6.0.10

Re-release after fixing component-versioning bug.

## 6.0.0

- Support for IE11 has been discontinued. Therefore, we no longer transpile the code with Babel, the codebase is based on ES2019.
- Fix react 18 type children issue. #2295

## 5.0.0

Migrate to lit. #2207

## 4.1.2

- Fix: Undo version 4.1.1, as the import was not used internally.

## 4.1.1

- Fix: `axa-icon` was not a dependency of the component.

## 4.1.0

- New: Checkmark icons to create a list in the component.

## 4.0.2

- Fix: prevent duplicate style attachment. (#1727)

## 4.0.1

- Fix button width, that was broken due to button changes. #1862

## 4.0.0

- BREAKING CHANGE: Removed slot="category". All categories must be a child of a `<header slot="title"></header>`. (#1796 and #1750)
- Replaced old typography with new one. This changes could have changed the components design. (#1796 and #1750)

## 3.1.0

- You can now import ts type for `variant`.

## 3.0.0

- Upgrade to versioned component.

## 2.0.0

- The implementation of the wrapper to make a component React-ready has
  fundamentally changed. In particular, unknown Boolean- or
  string-valued properties are now accepted and converted to HTML
  attributes. E.g. `data-seleniumid="my-id"` is now supported.
- All defined attributes attached to a component _before_ component
  construction time are now taken into account. Conversely, all undefined
  component attributes are initialized with type-appropriate default
  values at this time. This may amount to a breaking change if the
  component consumer had previously assumed undefined or uninitialized
  behaviour.
