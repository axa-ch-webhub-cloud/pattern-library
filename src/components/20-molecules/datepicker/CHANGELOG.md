
## 5.0.0
* Change behavior of width:
    * **Breaking change:** Removed `auto` - new default is `100%`
    * Percentage values are set to components css 
    * Percentage values not set to childs because that make no sense
    * Numeric values change the components width, no longer takes the whole width it gets from parent.
* Fixed behavior of height

## 4.0.1 (Migration to version 4)

* The implementation of the wrapper to make a component React-ready has
fundamentally changed. In particular, unknown Boolean- or
string-valued properties are now accepted and converted to HTML
attributes. E.g. `data-seleniumid="my-id"` is now supported.

* All defined attributes attached to a component *before* component
construction time are now taken into account. Conversely, all undefined
component attributes are initialized with type-appropriate default
values at this time. This may amount to a breaking change if the
component consumer had previously assumed undefined or uninitialized
behaviour.
