## 17.1.6

Migrate some flaky tests to playwright #2409

## 17.1.5

Re-release after fixing component-versioning bug.

## 17.1.3

Add optional type `name`

## 17.1.0

Use new major dropdown version 12.0.0

## 17.0.6

Improve datepicker types, event param names always `event` #2344

## 17.0.0

Support for IE11 has been discontinued. Therefore, we no longer transpile the code with Babel, the codebase is based on ES2019.

## 16.0.0

Migrate to lit. #2207

## 15.1.0

- year dropdown reversed sorting, so that it goes from current year at first position down.

## 15.0.5

- fix unscoped CSS. #2117

## 15.0.4

- fix use of non-IE Javascript. #2114

## 15.0.0

- format date in inputfield mode with consistent two-digit day and month parts on blur. (#2083)

## 14.0.0

- Remove `width` property. Instead set the inline-style. #1894.

## 13.0.1

- The arrow buttons do not submit a form anymore #2015.

## 13.0.0

- make `defaultValue` under React affect preselected datepicker date. (#1974)
- do not auto-select dates, limit selection to user interaction or property updates. (#1977)
- fix datepicker auto-positioning on first open. (#1981)

## 12.0.0

- breaking change: inputfield formatting is always d.m.yyyy irrespective of locale. (#1845)

## 11.0.0

- The datepicker is now wider than before.
- New buttons to switch between months. (#1908)
- Today is now always highlighted. (#1909)

## 10.0.2

- Fix: prevent duplicate style attachment. (#1727)

## 10.0.1

- New calendar icon. #1882
- New arrow icons at the dropdowns. #1882

## 10.0.0

- Removed height property. (#1840)
- `width` now only affects inputfield. (#1840)
- Implemented a new animation.

## 9.3.0

- Replaced old typography with new one. This changes could have changed the components design. (#1796 and #1750)

## 9.2.1

- Fix width problem in Safari. (#1794)
- Fix that IE adds extra space on top of element. (#1864)

## 9.2.0

- You can now import ts type for AXADatepickerChangeEvent.

## 9.1.0

- New callback `onInputfieldKeyUp` which is called if the user type something at the Inputfield.

## 9.0.2

- Make negative Unix Epoch dates valid (#1806)

## 9.0.1

- Make hover state consistent. (#1825)

## 9.0.0

- **Breaking change:** The `year` attribute (which is default: current year) is not being automatically added to `allowedyears` if you have specified any `allowedyears`. (#1805)
- **Breaking change:** If you do not specify any `allowedyears`, the `year` property value will be added to `allowedyears` to avoid an empty year dropdown. (#1810)

## 8.0.0

- Upgrade to versioned component.

## 7.0.8

- No changes.

## 7.0.7

- The year drop down enlarged by 5px. (AEM-5445)

## 7.0.5

- Fix wrong date formatting for locale `it-CH` (#1740)
- Now all month identifiers of all languages are capitalized at IE browser.

## 7.0.4

- Remove min-width from input element. (#1741)

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
