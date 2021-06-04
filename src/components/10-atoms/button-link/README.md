# AXA Button Link

Button links provide link functionality, but in the style of a button. They may display text, icons, or both. Button links can be styled via several properties to change their look-and-feel.
If you need a semantically correct button, use [axa-button](https://github.com/axa-ch-webhub-cloud/pattern-library/blob/develop/src/components/10-atoms/button/README.md) instead.

## Properties

### Variant

| Attribute             | Details                      |
| --------------------- | ---------------------------- |
| `variant="secondary"` | Button link in a ghost state |
| `variant="red"`       | Button link red              |
| `variant="inverted"`  | Button link inverted         |

### Href

The string-valued attribute `href` is used like in a native &lt;a&gt; hyperlink.

### External

The Boolean attribute `external` adds the `target="_blank"` functionality.

### Size

| Attribute      | Details                    |
| -------------- | -------------------------- |
| `size=""`      | Default button medium size |
| `size="small"` | button small size          |
| `size="large"` | button large size          |

### motionOff

The Boolean attribute `motionoff` deactivates the hover animation.

### disabled

The Boolean attribute `disabled` disables the button natively.

### icon

Using the attribute `icon`'s string value as icon name, an icon will be rendered. To see the full list of possible icons, see the [axa-icon](https://github.com/axa-ch-webhub-cloud/pattern-library/blob/develop/src/components/10-atoms/icon/README.md) README.

### onClick

The function-valued attribute `onClick` can be used as a callback prop for React and other frameworks.
