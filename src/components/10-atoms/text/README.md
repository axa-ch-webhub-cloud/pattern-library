# Text

A convenience component to apply possible AXA text styles to a piece of text.

It accepts simple text strings as children or if you want to render text nodes wrapped in custom tags. You should use the attribute `tagless` so that the wrapping paragraph is not rendered.

## Properties

### variant

| Attribute            | Details          |
| -------------------- | ---------------- |
| `variant="size-2"`   | Bigger Text Size |
| `variant="size-3"`   | Large Text Size  |
| `variant="size-4"`   | Small Text Size  |

### tagless

Add `tagless` attribute to not render a wrapping paragraph

### bold

This attribute add font-weight `bold`

### italic

This attribute add font-style `italic`

## Custom CSS Properties

`--margin`: margin on the host(axa-text) element 
