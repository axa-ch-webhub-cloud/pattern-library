## 3.3.0

- New icons. #1882
- The text of the red button is visible again.

## 3.2.0

- Replaced old typography with new one. This changes could have changed the components design. (#1796 and #1750)

## 3.1.0

- You can now import ts prop types.

## 3.0.0

- Upgrade to versioned component.

## 2.0.10

- Fixed a visual flicker when dragging files and moving the mouse without dropping the files. (#1724)

## 2.0.9

- Apply design-change suggestions from designers to allow coexistence of filename and per-file error message.
- Minor bugfixes. (#1715)

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
