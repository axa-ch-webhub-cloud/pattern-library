# Policy features

With this component you can highlight as much `features` as you want. You can set a main title and put `features` items as childs to it.

## Properties

### variant

The attribute `variant` (optional) specifies the background and the font color of this component and all its children.

| Attribute             | Details                                                          |
| --------------------- | ---------------------------------------------------------------- |
| `variant=""`          | background is `dark-indigo` and font color is set automatically. |
| `variant="axa-blue"`  | background is `axa-blue` and font color is set automatically.    |
| `variant="wild-sand"` | background is `wild-sand` and font color is set automatically.   |
| `variant="white"`     | background is `white` and font color is set automatically.       |

### title

The attribute `title` (optional) specifies the main title at the top.

### Migration Notes

You don't have to pay attention to anything for upgrading to newer version.

# axa-policy-features-item

You have to set `axa-policy-features-item` as childs of `axa-policy-features`. It renders a icon on top, a headline and a description text. Usage see examples above.

## Properties

### title

The attribute `title` (optional) specifies the title of your feature.

### icon

You can set a URL to a svg, for example `https://url-to-svg-icon.svg`. Instead of that you can set a svg as a string (if you import a icon or image from `@axa-ch/materials`).

The size of the svg will be set to:

- Tablet and bigger (`md-up`): 96x96 px
- All smaller devices: 42x42 px

### description

A text that describes your feature.
