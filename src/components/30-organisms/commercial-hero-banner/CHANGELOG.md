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
