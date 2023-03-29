## 8.1.0

Update package scope, registry and repository URL. #2423

## 8.0.10

Re-release after fixing component-versioning bug.

## 8.0.0

Support for IE11 has been discontinued. Therefore, we no longer transpile the code with Babel, the codebase is based on ES2019.

## 7.0.0

Migrate to lit. #2207

## 6.0.0

- BREAKING CHANGE: The new default for `size` of icons loaded by URL or SVG string is now 24x24 px instead of `auto`.
- BREAKING CHANGE: We renamed the size value `auto` to `original`.
- Functional icons should have only 3 sizes. You can now set these dimensions via `size` property. #2110

## 5.1.10

- The new material icons were added.

## 5.0.4

- Fix: prevent duplicate style attachment. (#1727)

## 5.0.3

- Remove `plus` icon and replace it with `add` in Typescript typings.

## 5.0.0

- BREAKING CHANGE: The icon `plus` is not available anymore. Use `add` instead.

## 4.0.0

- Upgrade to versioned component.

## 3.0.0

- BREAKING CHANGE: Changed default behavior: SVGs have now 24x24 pixels. (#1725)
- BREAKING CHANGE: Use newest major version of `materials` with changed icons.

## Migration to version 2

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

## Version 1.3.0

- add the possibility to set svg as a string
- add property `size` to React interface
