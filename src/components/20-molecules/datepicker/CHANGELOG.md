## 5.0.1
- We do not set height to component anymore because that causes a bad behavior if you has set a label text
- Set a width to popup wrapper because of IE

## 5.0.0

- Change behavior of attribute `width`:
  - **Breaking change:** Removed `auto` - new default is `100%`
  - Now the component change it's width and not just a child div of the component. No empty space is "reserved" anymore. You set the width and the whole component is getting exactly this width.
- Fixed behavior of attribute `height`
  - Now it's possible to set a height (only px values makes sense, not percentage). That feature was broken before.
- Changed appearance from `inline-block` to `inline` to have possibility to arrange other elements next to datepicker

## 4.0.1 (Migration to version 4)

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
