# AXA Button

Buttons provide a clickable element, which can be used in forms, or anywhere else where simple, standard call-to-action functionality is needed. They may display text, icons, or both. Buttons can be styled via several properties to change their look-and-feel.
If you need a link with button styling, use [axa-button-link](https://github.com/axa-ch-webhub-cloud/pattern-library/blob/develop/src/components/10-atoms/button-link/README.md) instead.

## Properties

### Variant

| Attribute                           | Details                            |
| ----------------------------------- | ---------------------------------- |
| `variant="secondary"`               | Button in a ghost state            |
| `variant="red"`                     | Button red                         |
| `variant="inverted"`                | Button inverted                    |
| `variant="inverted-blue-ocean"`     | Button inverted blue ocean         |
| `variant="inverted-red-tosca"`      | Button inverted red tosca          |
| `variant="inverted-purple-logan"`   | Button inverted purple logan       |
| `variant="inverted-green-viridian"` | Button inverted green viridian     |
| `variant="inverted-blue-teal"`      | Button inverted inverted blue teal |

### Type

| Attribute       | Details                                  |
| --------------- | ---------------------------------------- |
| `type="button"` | Default button type (default if omitted) |
| `type="submit"` | Submit button submit for forms           |
| `type="reset"`  | Reset button for forms                   |

### Size

| Attribute      | Details                    |
| -------------- | -------------------------- |
| `size=""`      | Default button medium size |
| `size="small"` | button small size          |
| `size="large"` | button large size          |

### motionOff

The Boolean attribute `motionoff` deactivates hover animation.

### disabled

The Boolean attribute `disabled` disables the button natively.

### icon

Based on the string-valued attribute `icon`, interpreted as icon name, an icon will be rendered. To see the full list of possible icons, see the [axa-icon](https://github.com/axa-ch-webhub-cloud/pattern-library/blob/develop/src/components/10-atoms/icon/README.md) README.

### onClick

The function-valued attribute `onClick` can be used as a callback prop for React and other frameworks.

### className

With this string attribute you can set a CSS class to the component.
