# Top content bar

Used as top of the page warning or info box that can show text and have a call to action button.
It can also be display at the bottom of the screen on mobile devices (see below for the stickymobile attribute).

There is also the possibility to add child elements.

## Properties

### Variant

| Attribute             | Details                                        |
| -------------------   | ---------------------------------------------- |
| `variant="warning"`   | Show a red top content bar as a warning banner |
| `variant="success"`   | Show a green top content bar as a success banner |
| `variant="attention"` | Show a yellow top content bar as a attention banner |

### ctatext

The attribute `ctatext` specifies the text displayed on the button.
If no attribute `href` is set, it will render an `axa-button` and the `onClick` callback will trigger upon click. If `ctatext` is omitted, no button will be shown.

### href

The attribute `href` specifies the link, that should be opened by pressing on the button with the text defined in `ctatext`. This is mainly for semantic reasons, you still need to forward the user to the new location, by listening to the `onClick` callback. Just providing the `href` attribute will not do anything by itself.

### icon

Using the string-valued attribute `icon` as icon name, an icon will be rendered. To see the full list of possible icons, see the [axa-icon](https://github.com/axa-ch-webhub-cloud/pattern-library/blob/develop/src/components/10-atoms/icon/README.md) README.

### stickymobile

Set the Boolean attribute `stickymobile` to `true` to display the bar at the bottom of the screen on mobile devices with width < 576px.

### closable

Set the Boolean attribute `closable` to `true` to display the Close button. Once the bar is closed it will not be displayed any more during that browser session.

### closed

The Boolean property `closed` can be used to hide or show the bar on the page. We use this property after we check the sessionStorage item `top-content-bar-closed`.

### onClick

The function-valued attribute `onClick` can be used as a callback prop for React and other frameworks.
