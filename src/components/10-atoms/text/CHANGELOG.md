## 4.3.1

- Fix: prevent duplicate style attachment. (#1727)

## 4.3.0

- Add new variant `semibold` with a font-weight of 600. #1895

## 4.2.0

- Replaced old typography with new one. This changes have changed the components design. (#1796 and #1750)

## 4.1.0

- You can now import ts type for `variant`.

## 4.0.0

- Upgrade to versioned component.

## 3.0.4

- bugfix avoiding deletion of child elements in some cases. #1790

## 3.0.3

- bugfix to satisfy user expectation of dynamic child updates being reflected, plus general improvements of
  implementation.

## 3.0.0

- The variants are now mutually exclusive, which means that you cannot combine multiple of them. E.g. `<axa-text variant="size-1 bold"></...>`

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
