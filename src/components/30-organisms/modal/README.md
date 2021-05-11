# Modal

A modal component for custom child elements.
**Important:**

- `z-index` for the modal is 3000.
- `margin-top` will automatically be set to `0` for the _first_ child element.
- `margin-bottom` will automatically be set to `0` for the _last_ child element.

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

if `small`is set to true, it has the `small` size and sets the `max-width` attribute to 500px.
