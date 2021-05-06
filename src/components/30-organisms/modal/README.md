# Modal

A modal component for custom child elements.
**Important:** `z-index` for the modal is 3000.

```bash
npm install @axa-ch/modal
```

```js
import '@axa-ch/modal';

// ...

<axa-modal></axa-modal>;
```

## Properties

### Variant

| Attribute | Details                                                |
| --------- | ------------------------------------------------------ |
| `open`    | State of modal visibility (boolean)                    |
| `forced`  | Disables the internal close mechanisms (boolean)       |
| `small`   | Smaller version of the modal (boolean, default: false) |

### open

If `open` is set to `true`, then the modal will be displayed to the user.

### forced

If `forced` is set to `true`, closing functionality has to be manually implemented. This is useful for legal text displayed to the user, where the user has to explicitly "approve" to click the modal away.

### small

if `small`is set to true, it has the `small` size.
