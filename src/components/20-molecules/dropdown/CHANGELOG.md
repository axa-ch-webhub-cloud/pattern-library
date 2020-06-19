## 8.1.0

- Replaced old typography with new one. This changes could have changed the components design. (#1796 and #1750)

## 8.0.0

- Upgrade to versioned component.

## 7.0.5

- No changes.

## 7.0.3

- Add ellipsis to cropped text of desktop-style-dropdown. (#1716)

## 7.0.1

- Remove datepicker specific stylings from axa dropdown. (#1720)

## 7.0.0

- Add padding to dropdown button. (#1708)

## 6.0.0

- Controlled mode can no longer be triggered in non-React scenarios.
- Match version number of `@axa-ch/datepicker`.

## 5.0.4

- No breaking change. Release just to have same version number as `@axa-ch/datepicker`.

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

## Version 3.2.3

- With `defaulttitle` set and in enhanced mode, the first dropdown item now has index 1 instead of 0 (Reason: the first item of the native select is the defaulttitle and has index 0).

## Version 3.2.2

- fix colors of selector icon in disabled state

## 3.0.0

- The attribute `valid` was renamed to `checkmark` (respectively to the camel-case `checkMark` property used e.g. under React).
- The behaviour of `error` changed, now being reduced to specifying the error text only, whereas `invalid` controls when the error will be displayed.
