## 5.1.8

Fixes: react 18 cursor jump #2373

## 5.1.7

Improve type of `onChange` event with `AXATextareaChangeEvent`

## 5.2.0

Add boolean attribute `autocomplete` to put the HTML autocomplete attribute to "on". The default is "off"

## 5.1.3

Improve textarea types, event param names always `event` #2344

## 5.1.0

Add readonly flag. #2264

## 5.0.0

- Support for IE11 has been discontinued. Therefore, we no longer transpile the code with Babel, the codebase is based on ES2019.
- Fix react 18 type children issue. #2295
- Add html attributes types

## 4.0.0

Migrate to lit. #2207

## 3.1.2

- Add `event` to the `onClick`, `onBlur` and `onFocus` typescript interface. (#2151)

## 3.1.1

- Fix: prevent duplicate style attachment. (#1727)

## 3.1.0

- Replaced old typography with new one. This changes could have changed the components design. (#1796 and #1750)

## 3.0.0

- Upgrade to versioned component.

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
