## 7.0.1

- Fix bug preventing height adaptation with long texts and externally restricted width. #2234

## 7.0.0

- Support for IE11 has been discontinued. Therefore, we no longer transpile the code with Babel, the codebase is based on ES2019.
- Fix react 18 type children issue. #2295
- Add html attributes types

## 6.0.0

Migrate to lit. #2207

## 5.0.10

- Removed outline style on focussing the element. (#2085)

## 5.0.0

- **BREAKING CHANGE**: Same height on all devices. (#1869)

## 4.2.4

- Fix: prevent duplicate style attachment. (#1727)

## 4.2.3

- Fix: Gap below the component. (#1878)

## 4.2.0

- Replaced old typography with new one. This changes could have changed the components design. (#1796 and #1750)

## 4.1.0

- You can now import ts types for `size` and `variant`.

## 4.0.0

- Upgrade to versioned component.

## 3.1.0

- It is now possible to set the css `width` property. (#1743)

## 3.0.2

- When attribute `disabled` is set and a consumer has a click-listener, the click event is NOT triggered.

## 3.0.0

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

## 2.0.0

- The `large` property is obsolete, use `size` property instead, like `size="large".
