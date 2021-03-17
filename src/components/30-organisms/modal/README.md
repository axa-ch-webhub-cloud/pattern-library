# Modal

A modal component for custom child elements.
**Important:** `z-index` for the modal is 3000.

```bash
npm install @axa-ch/modal
```

```js
import '@axa-ch/modal';
...
<axa-modal></axa-modal>
```

## Properties

### Variant

| Attribute                 | Details                    |
| ------------------------- | -------------------------- |
| `open=true`               | State of modal visibility  |
| `closeButtonText='Close'` | Text of modal close button |

### open

If `open` is set to `true`, then the modal will be displayed to the user.

### closeButtonText

Defined the text of the close button.
