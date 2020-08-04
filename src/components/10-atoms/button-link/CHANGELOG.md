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
