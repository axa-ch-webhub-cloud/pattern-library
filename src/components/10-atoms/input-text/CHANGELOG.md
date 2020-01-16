## Version 3.0.7

- Set empty string as default value for placeholder. In React we rendered "undefined" instead of empty string. Issue #1602.

## Version 3.0.4

- Fix: When using the autocomplete for form elements in Safari on macOs and iOS, the maxlength check had no effect.

## Version 3.0.3

- Safari had an issue with the cursor on all platforms, which is hereby fixed.

## Migration to version 3

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

## Version 2.4.7

- If no counter text is given the character count will not be displayed.
