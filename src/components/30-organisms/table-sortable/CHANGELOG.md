## 5.2.0

Update package scope, registry and repository URL. #2423

## 5.1.7

Re-release after fixing component-versioning bug.

## 5.1.4

Rename callback prop `onClick`'s parameter type `event` to `item` #2341

## 5.1.3

Improve table-sortable types, event param names always `event` #2344

## 5.1.0

Add `key` to model attribute to allow custom sorting. #2235

## 5.0.0

- Support for IE11 has been discontinued. Therefore, we no longer transpile the code with Babel, the codebase is based on ES2019.
- Fix react 18 type children issue. #2295

## 4.0.0

Migrate to lit. #2207

## 3.2.0

- It is now possible to display HTML as text. (#1959)

## 3.1.1

- Fix: prevent duplicate style attachment. (#1727)

## 3.1.0

- You can now import ts types for `model` and props.

## 3.0.0

- Upgrade to versioned component.

## 2.1.3

- `datesortcolumnindex` now works with React. #1765

## 2.1.0

- New attribute `datesortcolumnindex` is now supported. Use it to sort date columns properly. Issue #1629.

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

## 1.3.6

- Table header text is now standard grey, not blue
- Sorting arrows visibility in non-active mode changed
