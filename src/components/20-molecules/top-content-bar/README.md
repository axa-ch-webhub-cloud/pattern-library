# Top content bar

Used as top of the page warning or info box that can show text and have a call to action button.
It can also be display at the bottom of the page on mobile devices.

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

### icon

Using the string attribute `icon` as icon name, an icon will be rendered. To see the full list of possible icons, see the [axa-icon](https://github.com/axa-ch-webhub-cloud/pattern-library/blob/develop/src/components/10-atoms/icon/README.md) README.

### stickymobile

Set the attribute `stickymobile` to `true` to display the bar at the bottom of the screen on mobile devices with width < 411px.

### overlaydesktop

Set the attribute `overlaydesktop` to `true` to display the bar on top of DOM element that comes after this element. Usually that would be the Keyvisual CTA component.

### closeable

Set the attribute `closeable` to `true` to display the Close button. Once the bar is closed it will not be displayed any more during that browser session.

### onClick

The function-valued attribute `onClick` can be used as a callback prop for React and other frameworks.
