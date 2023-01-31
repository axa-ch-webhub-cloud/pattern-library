## 5.0.1

Re-release due to component-versioning code improvements/bugfixes

## 5.0.0

- Support for IE11 has been discontinued. Therefore, we no longer transpile the code with Babel, the codebase is based on ES2019.
- Fix react 18 type children issue. #2295

## 4.0.0

Migrate to lit. #2207

## 3.0.11

- Fix: No visual border when hovering over
- Fix: No border-bottom in blue color when hovering over last element on small screen

## 3.0.10

- Fix: interrupted border. (#2204)

## 3.0.1

- Fix: prevent duplicate style attachment. (#1727)

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
