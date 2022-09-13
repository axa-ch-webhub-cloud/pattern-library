## 5.0.0

Breaking change:
- Change `active` attribute to `checked`
- Change Custom Event name from `change` to `axa-toggle-switch-toggle`
- Change callback prop `onChange` to `onToggle` and simplify param, see the ["onToggle" section in the readme](https://github.com/axa-ch-webhub-cloud/pattern-library/tree/develop/src/components/10-atoms/toggle-switch#ontoggle).

## 4.0.6

Improve toggle-switch types, event param names always `event` #2344

## 4.0.0

- Support for IE11 has been discontinued. Therefore, we no longer transpile the code with Babel, the codebase is based on ES2019.
- Add html attributes types

## 3.0.0

Migrate to lit. #2207

## 2.2.0

- Added outline for accessibility reasons. (#2198)

## 2.1.0

- You can now add an error text to the toggle switch (#2074)

## 2.0.0

- BREAKING CHANGE: The `onChange` handler now only receives a synthetic event, see the ["Events" section in the readme](https://github.com/axa-ch-webhub-cloud/pattern-library/tree/develop/src/components/10-atoms/toggle-switch#events).
- Fixed the change event yielding the wrong underlying state.

## 1.1.0

- It is now possible to use &lt;axa-toggle-switch&gt; in [React controlled components](https://reactjs.org/docs/forms.html#controlled-components). (#1965)

## 1.0.1

- Fix: prevent duplicate style attachment. (#1727)

## 1.0.0

- First release of component.
