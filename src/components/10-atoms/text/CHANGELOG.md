## 7.0.0

Breaking change:
- Remove variant `semibold`, because this option is not available in the styleguide
- Remove variant `bold`; instead use a new boolean flag `bold`, because bold is possible for all text sizes
- Rename attribute `variant` to `size`
- When tags are placed inside the slot( children), one should use the attribute `nowrap` so that the wrapping paragraph is not rendered.
Features:
- Add back shadow DOM; fix paragraph issue for screenreaders (which had previously caused the removal of shadow DOM) differently on host element by using the appropriate ARIA role `paragraph`
- Add `nowrap` attribute to not render a wrapping paragraph
- Add `bold` attribute for font-weight
- Add `italic` attribute for font-style
Fixes:
- axa-text implementation violates lit contract #2288
- Make axa-text conformant to styleguide w.r.t. margin-bottom. To override margins, Custom CSS Property `--text-margin` can be used, or one can impose margins directly on axa-text.

## 6.0.0

- Support for IE11 has been discontinued. Therefore, we no longer transpile the code with Babel, the codebase is based on ES2019.
- Fix react 18 type children issue. #2295

## 5.0.0

Migrate to lit. #2207

## 4.4.0

- Added a 4th size. (#2143)

## 4.3.1

- Fix: prevent duplicate style attachment. (#1727)

## 4.3.0

- Add new variant `semibold` with a font-weight of 600. #1895

## 4.2.0

- Replaced old typography with new one. This changes have changed the components design. (#1796 and #1750)

## 4.1.0

- You can now import ts type for `variant`.

## 4.0.0

- Upgrade to versioned component.

## 3.0.4

- bugfix avoiding deletion of child elements in some cases. #1790

## 3.0.3

- bugfix to satisfy user expectation of dynamic child updates being reflected, plus general improvements of
  implementation.

## 3.0.0

- The variants are now mutually exclusive, which means that you cannot combine multiple of them. E.g. `<axa-text variant="size-1 bold"></...>`

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
