## 6.2.0

Update package scope, registry and repository URL. #2423

## 6.1.4

Re-release after fixing component-versioning bug.

## 6.0.0

- Support for IE11 has been discontinued. Therefore, we no longer transpile the code with Babel, the codebase is based on ES2019.
- Fix react 18 type children issue. #2295

## 5.0.0

Migrate to lit. #2207

## 4.1.2

- Fix: Remove unnecessary code.

## 4.1.1

- Fix: correct icons used for attention and warning variants. Font size corrected. (#2257)

## 4.1.0

- Feature: allow for icons, be more usable on mobile, and closable. (#2252)

## 4.0.7

- Fixed vertical alignment, in case a button is being used. (#2039)
- Fixed button size (small now).

## 3.2.1

- Fix: prevent duplicate style attachment. (#1727)

## 3.2.0

- Replaced old typography with new one. This changes could have changed the components design. (#1796 and #1750)

## 3.1.0

- You can now import ts type for `variant`.

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
