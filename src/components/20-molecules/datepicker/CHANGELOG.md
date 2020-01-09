
## 5.0.0
* Change behavior of width:
    * **Breaking change:** Removed `auto` - new default is `100%`
    * Percentage values are set to component's inner CSS
    * Percentage values not set to inner HTML because that makes no sense anymore
    * Numeric values change the component's width, no longer inherits from parent.
* Fixed behavior of height
* Changed appearance from `inline-block` to `inline` to have possibility to arrange other elements next to datepicker

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
