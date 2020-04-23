## 4.1.0

- You can now set css `width` and the `button` always look quite nice. (#1686).

## 4.0.2

- When attribute disabled is set and a consumer has a click-listener, the click event is NOT triggered.

## 4.0.0

- The implementation of the wrapper to make a component React-ready has
  fundamentally changed. In particular, unknown Boolean- or
  string-valued properties are now accepted and converted to HTML
  attributes. E.g. `data-seleniumid="my-id"` is now supported.

## 3.0.0

- All defined attributes attached to a component _before_ component
  construction time are now taken into account. Conversely, all undefined
  component attributes are initialized with type-appropriate default
  values at this time. This may amount to a breaking change if the
  component consumer had previously assumed undefined or uninitialized
  behaviour.

## 2.0.0

- The large property is obsolete, use size property like `size="large"`
