## 3.0.0

- (This version do not have a technical breaking change.)
- Fixes a problem that no label text is displayed (#1699)
    - **RECOMMENDATION:** Do not use component children. Use `label` attribute instead. You can now put HTML in there.
    - New boolean attribute `styled` was added. Set it to the component to style the `label` like `axa-text`

## 2.1.2

- Fixes minor issue [#1595](https://github.com/axa-ch/patterns-library/issues/1595).

## 2.1.1

- Fixes bug when no label is set and `variant="checkmark"` [#1598](https://github.com/axa-ch/patterns-library/issues/1598).

## 2.1.0

- A new attribute `variant` was added. This makes it possible to switch between a checkbox with a checkmark or an inner square as select-indicator.

## 2.0.2

- Adjust error state to styleguide requirements [#1572](https://github.com/axa-ch/patterns-library/issues/1572).

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
- Add `refId` [#1528](https://github.com/axa-ch/patterns-library/pull/1528)
- Prevent doubled labels when `label` attribute isn't set [#1535](https://github.com/axa-ch/patterns-library/pull/1535)
- Allow setting a label through children of the component
