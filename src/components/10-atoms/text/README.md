# Text

A convenience component to apply possible AXA text styles to a piece of text.

It accepts simple text strings that get rendered in a paragraph tag or if you want to render text nodes wrapped in custom tags. You should use the attribute `tagless` so that the wrapping paragraph is not rendered.

## Properties

### size

| Attribute  | Details               |
|------------|-----------------------|
| `size="1"` | Extra Large Text Size |
| `size="2"` | Large Text Size       |
| `size="3"` | Medium Text Size      |
| `size="4"` | Small Text Size       |

### tagless

This Boolean attribute `tagless` will lead to not render the wrapping paragraph

### bold

This Boolean attribute add the font-weight `bold`

### italic

This Boolean attribute add the font-style `italic`

## Custom Margins

You can overwrite the predefined margins on the custom element tag or use custom css property `--text-margin`, see the example.
Please only do this if this is abolutely necessary, since the default margins are aligned with the styleguide.

Example:

```html
<axa-text size="1">I'm a paragraph</axa-text>

<style>
  axa-text {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }

  axa-text {
    --text-margin: 0;
  }
</style>
```
