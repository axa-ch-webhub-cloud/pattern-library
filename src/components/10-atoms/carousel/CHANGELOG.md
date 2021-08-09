## 4.0.0

Migrate to lit. #2207

## 3.2.8

- No console error if web component is destroyed/ disconnectedCallback is called.

## 3.2.1

- Fix: prevent duplicate style attachment. (#1727)

## 3.2.0

- Replaced old typography with new one. This changes could have changed the components design. (#1796 and #1750)

## 3.1.0

- You can now import ts prop types.

## 3.0.0

- Upgrade to versioned component.

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
