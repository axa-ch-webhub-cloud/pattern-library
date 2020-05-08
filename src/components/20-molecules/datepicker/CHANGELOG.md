## 7.0.4

- Remove min-width from input element. #1741

## 7.0.1

- Remove datepicker specific stylings from axa dropdown. (#1720)

## 7.0.0

- **Breaking change:** "Cancel" and "Accept" buttons have been removed. If you relied on them, this is a breaking change for you, otherwise not.
- Bugfix: Under certain instances, it was possible, that the calendar sheet got empty (no days appearing to select). This was a rendering issue and is now fixed.
- UX bugfix: When no day was selected, there was a preselection that was actually not a user-issued selection. When you switched the month or year, that same day would appear as selected within the newly selected month/year, which could lead to confusion.
- UX improvement: A day can be preselected now. It will appear with a grey background (and if no pre-selection is set, the current day will be marked as preselected). This is only a UI-specific improvement and does not change externally accessible component state.

## 6.0.4

- Fixed the border-top shadow of input element on iOS devices (#1694)

## 6.0.0

- Controlled mode can no longer be triggered in non-React scenarios.
- Week reliably starts on Monday.
- Empty `invaliddatetext` supresses error UI
- Increased trustworthiness of both days-of-month calculation and visual calendar matrix

## 5.0.2

- We do not set parameter `height` to component's css anymore because that causes a bad behavior if you has set a label text
- Changed implementation internals for `width` due to IE bug (Issue #1601)

## 5.0.0

- Change behavior of attribute `width`:
  - **Breaking change:** Removed `auto` - new default is `100%`
  - Now the component change it's width and not just a child div of the component. No empty space is "reserved" anymore. You set the width and the whole component is getting exactly this width.
- Fixed behavior of attribute `height`
  - Now it's possible to set a height (only px values makes sense, not percentage). That feature was broken before.
- Changed appearance from `inline-block` to `inline` to have possibility to arrange other elements next to datepicker

## 4.0.1

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
