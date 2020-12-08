# Fieldset

The &lt;axa-fieldset&gt; component is used to group several controls within a web form. Compared to its native HTML counterpart, its function is mainly restricted to styling: the element ensures that the grouped controls
obey correct spacing as per the style guide.

By default, the element children's layout direction is vertical.

Vertical direction is typically used to used to ensure correct layout for a group of &lt;axa-checkbox&gt; or non-button
&lt;axa-radio&gt; elements.

_Note: This component only styles its immediate children! For best results, avoid extra &lt;div&gt; wrappers or similar around children components._

## Properties

Unless noted otherwise, properties can be set via attributes or properties.
Starred property names are reflected to attributes.

### horizontal\*

The string-valued `horizontal` attribute changes the layout direction of the element's children to horizontal (default: "horizontal"). It also imposes the correct horizontal gaps between children, except for children with a `nogap` attribute.

| Attribute                 | Details                                                                                                                                                                                                           |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `horizontal="horizontal"` | Ensure correct layout for a group of &lt;axa-radio&gt; buttons.                                                                                                                                                   |
| `horizontal="stretch"`    | This mode is responsive: when crossing the `sm(all)` breakpoint (575px), this component forces conformant children to assume 100% width and rearranges them into a vertical layout with correct vertical spacing. |

### error\*

The string-valued `error` attribute, when nonempty, displays its value as an error message below the fieldset's children.

As a special case, it also colors the border of unselected &lt;axa-radio&gt; components in the error color.
