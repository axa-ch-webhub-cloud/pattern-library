# Heading

The title component provides a way to conveniently use headings and titles, that are in line with the style guide. Keep in mind that you need to import the fonts separately.

## Properties

| Attribute             | Details                                                                                                                        |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `variant="secondary"` | Secondary variant will use publico as font. Default: "primary"                                                                 |
| `rank="1"`            | Rank holds a number from one to six, which represents the underlying html heading tag. `rank="1"` will lead to a `h1` element. |

## Custom Margins

The custom element tag has the style property `display: block` applied to it, which means, that you can overwrite the predefined margins. Please only do this if this is abolutely necessary, since the default margins are aligned with the styleguide.

Example:

```html
<axa-heading rank="1">I'm a h1 title</axa-heading>

<style>
  axa-heading {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
```
