## 8.2.0

Button configurable as full widht block element `block` #2354

## 8.1.2

Improve button types, event param names always `event` #2344

## 8.1.0

Add `href` to render button link and `external`

## 8.0.1

Fix: Remove IE hacks. #2107

## 8.0.0

- Support for IE11 has been discontinued. Therefore, we no longer transpile the code with Babel, the codebase is based on ES2019.
- Fix react 18 type children issue. #2295
- Add html attributes types

## 7.0.0

Migrate to lit. #2207

## 6.0.16

- Add `event` to the `onClick` typescript interface. #2136

## 6.0.10

- Now its possible to submit a form with keyboard events. (#2078)
- Removed outline style on focussing the element. (#2085)

## 6.0.0

- **BREAKING CHANGE**: Same height on all devices. (#1869)

## 5.2.4

- Fix: prevent duplicate style attachment. (#1727)

## 5.2.3

- Fix: Gap below the component. (#1878)

## 5.2.0

- Replaced old typography with new one. This changes could have changed the components design. (#1796 and #1750)

## 5.1.0

- You can now import ts types for `type`, `size` and `variant`.

## 5.0.2

- Dynamic button-text updates for submit/reset-type buttons no longer break form submittability. (#1815)

## 5.0.0

- Upgrade to versioned component.

## 4.1.0

- You are able to set the css `width` property and the `button` looks always nice. (#1686)

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
