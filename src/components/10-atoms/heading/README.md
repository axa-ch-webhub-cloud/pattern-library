# Heading

The title component provides a way to conveniently use headings and titles, that are in line with the style guide. Keep in mind that you need to import the fonts separately.

## Properties

## size

Size holds a number from one to six, which represents the underlying html heading tag.

| Attribute  | Details                      |
|------------|------------------------------|
| `size="1"` | will lead to a `h1` element. |
| `size="2"` | will lead to a `h2` element. |
| `size="3"` | will lead to a `h3` element. |
| `size="4"` | will lead to a `h4` element. |
| `size="5"` | will lead to a `h5` element. |
| `size="6"` | will lead to a `h6` element. |

## secondary

The Boolean attribute `secondary` will use `Publico Headline` as font. Default use `Source Sans Pro`

## Custom Margins

You can overwrite the predefined margins on the custom element tag or use custom css property `--heading-margin`, see the examples.
Please only do this if this is abolutely necessary, since the default margins are aligned with the styleguide.

Example:

```html
<axa-heading size="1">I'm a h1 title</axa-heading>

<style>
  axa-heading {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }

  axa-heading {
    --heading-margin: 0;
  }
</style>
```
