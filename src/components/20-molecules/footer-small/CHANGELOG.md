## Migration to version 4

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

## Migration from 2.x to 3.x

- Child fragments replaced the JSON structure. This is a complete overhaul and you need to start from scratch. The biggest change apart from that will be, that `onLanguageClick` and `onDisclaimerClick` now fire the index of the element, instead of a name or a key.

## Migration from 1.x to 2.x

- [Do not bother doing this, you should go straight to the 2.x to 3.x migration part and use the latest version]
  The necessary "key" property on the items was introduced. Not providing this key will break your component after upgrading.
