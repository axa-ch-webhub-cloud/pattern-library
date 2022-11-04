## 7.0.0

- Breaking Change: Rename attribute `rank` to `size`
- feat: Add Custom CSS property `--heading-margin`
- fix: Add missing attribute type `secondary`

## 6.0.0

Change attribute `variant` string to `secondary` boolean. #2336

## 5.0.0

- Support for IE11 has been discontinued. Therefore, we no longer transpile the code with Babel, the codebase is based on ES2019.
- Fix react 18 type children issue. #2295

## 4.0.0

Migrate to lit. #2207

## 3.1.1

- Fix: prevent duplicate style attachment. (#1727)

## 3.1.0

- Replaced old typography with new one. This changes have changed the components design. The font-weight is now 700. (#1796 and #1750)

## 3.0.0

- Upgrade to versioned component.

## 2.0.0

- The default browser margins were reset to 0. #1693
- The margins of the axa-heading can now be changed by the user, by applying the margins directly to the root element. #1693
