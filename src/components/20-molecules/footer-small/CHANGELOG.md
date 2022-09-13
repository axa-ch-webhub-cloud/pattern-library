## 7.0.6

Improve footer-small types, event param names always `event` #2344

## 7.0.0

- Support for IE11 has been discontinued. Therefore, we no longer transpile the code with Babel, the codebase is based on ES2019.
- Fix react 18 type children issue. #2295

## 6.0.0

Migrate to lit. #2207

## 5.1.1

- Fix: prevent duplicate style attachment. (#1727)

## 5.1.0

- Replaced old typography with new one. This changes could have changed the components design. (#1796 and #1750)

## 5.0.0

- Upgrade to versioned component.

## 4.0.3

- Fixes dynamic updates of footer-small child elements. [#1549](https://github.com/axa-ch-webhub-cloud/pattern-library/issues/1549)

## 4.0.0

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

## 3.0.0

- Child fragments replaced the JSON structure. This is a complete overhaul and you need to start from scratch. The biggest change apart from that will be, that `onLanguageClick` and `onDisclaimerClick` now fire the index of the element, instead of a name or a key.

## 2.0.0

- [Do not bother doing this, you should go straight to the 2.x to 3.x migration part and use the latest version]
  The necessary "key" property on the items was introduced. Not providing this key will break your component after upgrading.
