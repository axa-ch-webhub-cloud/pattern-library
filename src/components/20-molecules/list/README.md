# List

List in various variants. Standardizes the use of `ol` and `ul` tags.

## Properties

### Variant

| Attribute           | Details                                                   |
| ------------------- | --------------------------------------------------------- |
| `variant="ordered"` | Variants (default: ul)                                    |
| `icon=""`           | If `variant` is set to `icon`, add the SVG here as string |

### variant

This defines, which tag is being used internally (`ol` and `ul`) and also gives certain possibilies like adding icons or go completely without styling.

default: Unordered list, with bullet-points
`ordered`: Ordered list, with numbers
`unstyles`: Unordered list, without bullet-points
`icon`: Unordered list, with icons as replacement for bullet-points

# icon

Add an SVG as string, if you need an icon instead of a bullet point or number preceding each list item.
