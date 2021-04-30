# Progress Bar

Deterministically displays the progress of an action/process.

## Properties

### Variant

| Attribute        | Details                                                                       |
| ---------------- | ----------------------------------------------------------------------------- |
| `small`          | Smaller version of the progress bar (boolean, default: false)                 |
| `noborderradius` | Removes the `border-radius`so it can fit to an edge (boolean, default: false) |
| `value`          | Sets the value (or progress) of the loader.                                   |
| `max`            | Sets the max value of the progress bar (default: 100).                        |
| `text`           | Sets the text below the progress bar.                                         |

### small

Smaller version of the progress bar (boolean, default: false)

### noborderradius

Removes the `border-radius`so it can fit edge to edge (boolean, default: false)

### value

Sets the value (or progress) of the loader. `value` can not surpass the value of `max`.

### max

Sets the max value of the progress bar. _default: 100_.

### text

Sets the text below the progress bar. Leave empty if no text is required.
