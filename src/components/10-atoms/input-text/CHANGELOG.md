## 6.5.0

Update package scope, registry and repository URL. #2423

## 6.4.1

Re-release after fixing component-versioning bug.

## 6.4.0

Add `onPaste` callback prop #2391

## 6.3.1

Improve type of `onChange` event with `AXAInputTextChangeEvent`

## 6.3.0

Feat: Add boolean attribute `autocomplete` to put the HTML autocomplete attribute to "on". The default is "off" #2364
Fixes: react 18 cursor jump #2373

## 6.2.1

- Fix Safari hack and remove obsolete code (showMessage getter). #2345
- Improve input-text types, event param names always `event` #2344

## 6.2.0

- New callback `onKeyDown` which is called if the user presses a key in the input-text field.
  Can for example be used to recognize when the ENTER key has been pressed.

## 6.1.0

Add readonly flag. #2263

## 6.0.0

- Support for IE11 has been discontinued. Therefore, we no longer transpile the code with Babel, the codebase is based on ES2019.
- Add html attributes types

## 5.0.0

Migrate to lit. #2207

## 4.5.4

- Fix: No currency formatting on first render. (#2020)
- Fix: Property invalid doesn't work with currency formatting. (#2021)

## 4.5.1

- Fix: Text wasn't legible in safari when disabled. (#1978)

## 4.5.0

- New callback `onKeyUp` which is called if the user presses a key in the input-text field.
  Can for example be used to recognize when the ENTER key has been pressed.

## 4.4.0

- You can now set a `currency` attribute. This will format the input `1000` for example to `CHF 1’000.00`. For details see README.md.

## 4.3.1

- Fix: prevent duplicate style attachment. (#1727)

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
