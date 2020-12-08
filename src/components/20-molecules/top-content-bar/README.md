# Top content bar

Used as top of the page warning or info box that can show text and have a call to action button.

There is also the possibility to add child elements.

## Properties

### Variant

| Attribute           | Details                                        |
| ------------------- | ---------------------------------------------- |
| `variant="warning"` | Show a red top content bar as a warning banner |

### ctatext

The attribute `ctatext` specifies the text displayed on the button.
If no attribute `href` is set, it will render an `axa-button` and the `onClick` callback will trigger upon click. If `ctatext` is omitted, no button will be shown.

### href

The attribute `href` specifies the link, that should be opened by pressing on the button with the text defined in `ctatext`. This is mainly for semantic reasons, you still need to forward the user to the new location, by listening to the `onClick` callback. Just providing the `href` attribute will not do anything by itself.

### onClick

The function-valued attribute `onClick` can be used as a callback prop for React and other frameworks.
