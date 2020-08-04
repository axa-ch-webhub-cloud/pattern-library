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
