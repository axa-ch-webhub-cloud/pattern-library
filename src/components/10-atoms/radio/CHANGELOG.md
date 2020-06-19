## 3.1.0

- Replaced old typography with new one. This changes could have changed the components design. (#1796 and #1750)

## 3.0.0

- Upgrade to versioned component.

## 2.1.9

- fix exceptions under unexpected DOM removal. #1780
- fix nogap not working under React. #1772

## 2.1.7

- Support material icons (dimension 48&times;48 pixels) #1738

## 2.1.0

- Export all typescript types instead of only a subset. #1616

## 2.0.3

- Prevent doubled labels when `label` attribute isn't set.

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
