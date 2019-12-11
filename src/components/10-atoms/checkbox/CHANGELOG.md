# Changelog

### Migration to version 4

The implementation of the wrapper to make a component React-ready has
fundamentally changed. In particular, unknown Boolean- or
string-valued properties are now accepted and converted to HTML
attributes. E.g. `data-seleniumid="my-id"` is now supported.

### Version 1.1.15

- Add `refId` [#1528](https://github.com/axa-ch/patterns-library/pull/1528)
- Prevent doubled labels when `label` attribute isn't set [#1535](https://github.com/axa-ch/patterns-library/pull/1535)
- Allow setting a label through children of the component
All defined attributes attached to a component *before* component
construction time are now taken into account. Conversely, all undefined
component attributes are initialized with type-appropriate default
values at this time. This may amount to a breaking change if the
component consumer had previously assumed undefined or uninitialized
behaviour.
