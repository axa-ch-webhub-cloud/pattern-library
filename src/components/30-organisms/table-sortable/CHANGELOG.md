## Migration to version 2

The implementation of the wrapper to make a component React-ready has
fundamentally changed. In particular, unknown Boolean- or
string-valued properties are now accepted and converted to HTML
attributes. E.g. `data-seleniumid="my-id"` is now supported.

All defined attributes attached to a component _before_ component
construction time are now taken into account. Conversely, all undefined
component attributes are initialized with type-appropriate default
values at this time. This may amount to a breaking change if the
component consumer had previously assumed undefined or uninitialized
behaviour.

## Version 1.3.6

- Table header text is now standard gray, not blue
- Sorting arrows visibility in non-active mode changed
