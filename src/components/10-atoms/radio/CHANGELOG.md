## 5.0.10

Re-release after fixing component-versioning bug.

## 5.0.6

Improve radio types, event param names always `event` #2344

## 5.0.5

Fix disabled implies checked

## 5.0.0

- Support for IE11 has been discontinued. Therefore, we no longer transpile the code with Babel, the codebase is based on ES2019.
- Add html attributes type

## 4.0.0

Migrate to lit. #2207

## 3.1.10

- Fix: The text of the radiobuttons now wraps. #2125

## 3.1.6

- Fix: Iconified radio buttons no longer have the attribute value `fill="currentColor"`. (#1942)

## 3.1.1

- Fix: prevent duplicate style attachment. (#1727)

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
