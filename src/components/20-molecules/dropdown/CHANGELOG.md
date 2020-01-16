## Migration to version 4

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

## Migrating from version 2 to 3

The attribute `valid` was renamed to `checkmark` (respectively to the camel-case `checkMark` property used e.g. under React).

The behaviour of `error` changed, now being reduced to specifying the error text only, whereas `invalid` controls when the error will be displayed.

## Version 3.2.2

- fix colors of selector icon in disabled state

## Version 3.2.3

- With `defaulttitle` set and in enhanced mode, the first dropdown item now has index 1 instead of 0 (Reason: the first item of the native select is the defaulttitle and has index 0).
