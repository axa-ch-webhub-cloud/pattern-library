# Progress Bar

A progress bar that can be used for when something is loading and when you can determind the progress.

## Properties

### Variant

| Attribute   | Details                                                                       |
| ----------- | ----------------------------------------------------------------------------- |
| `small`     | Smaller version of the progress bar (boolean, default: false)                 |
| `fullWidth` | Removes the `border-radius`so it can fit to an edge (boolean, default: false) |
| `value`     | Sets the value (or progress) of the loader.                                   |
| `max`       | Sets the max value of the progress bar (default: 100).                        |
| `text`      | Sets the text below the progress bar.                                         |

### small

Smaller version of the progress bar (boolean, default: false)

### fullWidth

Removes the `border-radius`so it can fit to an edge (boolean, default: false)

### value

Sets the value (or progress) of the loader. The `value` can not get over 100

### max

Sets the max value of the progress bar. If `max` is not set, the _default value is 100_.

### text

Sets the text below the progress bar. This `text` is optional and it will not get displayed if empty
