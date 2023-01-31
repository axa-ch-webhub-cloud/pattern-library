## 6.0.7

Re-release due to component-versioning code improvements/bugfixes

## 6.0.6

Improve footer types, event param names always `event` #2344

## 6.0.0

- Support for IE11 has been discontinued. Therefore, we no longer transpile the code with Babel, the codebase is based on ES2019.
- Fix react 18 type children issue. #2295

## 5.0.0

Migrate to lit. #2207

## 4.1.27

- Fix: If you use React, the footer height automatically adapts to the number of child elements. #2142

## 4.1.7

- Fix: change rendering to requestAnimationFrame timing, s.t. browsers have more time to attach children to DOM. (#1890)

## 4.1.3

- Fix: prevent duplicate style attachment. (#1727)

## 4.1.2

- Only render accordion on mobile when content is given. #1836

## 4.1.0

- Replaced old typography with new one. This changes could have changed the components design. (#1796 and #1750)

## 4.0.0

- Upgrade to versioned component.

## 3.0.8

- Hardened `text-decoration` css property, because it was too easily unintentially overridden before by users.

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

## 2.0.0

- The breaking changes happened only in the `children`, and are listed here:

  - `<h2 slot="column-0-title-desktop">axa worldwide</h2>` -> desktop version of title has been removed.
  - `<a slot="column-0-item-X">` -> column and item index have been removed. Instead of column index, replace `-0-` with `-` resulting in `<a slot="column-item">`
  - `<h2 slot="column-title>` -> title column index has been replaced with `-`
  - `<a slot="social-item-2">` -> item index has been removed, resulting in `<a slot="social-item">`
