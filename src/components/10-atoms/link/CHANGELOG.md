## 6.0.0

Migrate to lit. #2207

## 5.0.0

- BREAKING CHANGE: Use `display: inline` if no icon is present. #2076

## 4.2.23

- Publish mouse event to onClick handler. This allows the consumer to stopPropagation() of the event.
  This may be a BREAKING CHANGE if consumer relies on onClick() being called with NO argument.

## 4.2.1

- Fix: prevent duplicate style attachment. (#1727)

## 4.2.0

- Replaced old typography with new one. This changes could have changed the components design. (#1796 and #1750)

## 4.1.0

- You can now import ts types for `variant` and props.

## 4.0.0

- Upgrade to versioned component.

## 3.0.1

- Fix external attribute of link. #1746

## 3.0.0

- BREAKING CHANGE: Now the referenced icons have the dimension 24x24 pixels, which is set by the icons component. (#1725)

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
