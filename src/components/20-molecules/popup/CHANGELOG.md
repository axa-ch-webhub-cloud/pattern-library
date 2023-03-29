## 5.1.0

Update package scope, registry and repository URL. #2423

## 5.0.10

Re-release after fixing component-versioning bug.

## 5.0.6

Improve popup types, event param names always `event` #2344

## 5.0.0

Support for IE11 has been discontinued. Therefore, we no longer transpile the code with Babel, the codebase is based on ES2019.

## 4.0.0

Migrate to lit. #2207

## 3.2.1

- Fix: prevent duplicate style attachment. (#1727)

## 3.2.0

- Updated all the icons. #1882

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
