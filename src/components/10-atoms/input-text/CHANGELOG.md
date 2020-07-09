## 4.3.0

- Replaced old typography with new one. This changes could have changed the components design. (#1796 and #1750)

## 4.2.1

- Fixed wrong internal key to get the version of dependency `axa-popup`. (#1842)

## 4.2.0

- No changes.

## 4.1.0

- The new attribute `autofocus`, when true, sets keyboard focus on the underlying native &lt;input&gt; element after initial rendering of the component. (#1798)
- Fix: The attribute `defaultValue` for react didn't work.

## 4.0.0

- Upgrade to versioned component.

## 3.0.13

- You can use new attribute `pattern` and `inputmode` for example to open up numeric keyboard on touch devices. (#1689)

## 3.0.7

- Set empty string as default value for placeholder. In React we rendered "undefined" instead of empty string. Issue #1602.

## 3.0.4

- Fix: When using the autocomplete for form elements in Safari on macOs and iOS, the maxlength check had no effect.

## 3.0.3

- Safari had an issue with the cursor on all platforms, which is hereby fixed.

## 3.0.0

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

## 2.4.7

- If no counter text is given the character count will not be displayed.
