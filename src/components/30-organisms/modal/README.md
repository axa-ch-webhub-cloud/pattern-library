# Modal

A modal component for custom child elements.
**Important:**

- `z-index` for the modal is 3000.
- `margin-top` will automatically be set to `0` for the _first_ child element in `forced` mode.
- `margin-bottom` will automatically be set to `0` for the _last_ child element in `forced` mode.

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
| `noheader`| Removes the header and the space around the modal content (boolean, default: false) |

### open

If `open` is set to `true`, then the modal will be displayed to the user.

### forced

If `forced` is set to `true`, closing functionality has to be manually implemented. This is useful for legal text displayed to the user, where the user has to explicitly "approve" to click the modal away.

### small

If `small`is set to true, it has the `small` size and sets the `max-width` attribute to 500px.

### no header

If `noheader` is set to true, the modal will be displayed without header and padding of the root element.

## onClose / axa-close

Under React we can pass a method `onClose` that will get called when the Modal closes, like so:

```js
<AXAModal
  open
  onClose={(customEvent) => {
    console.log(customEvent, 'called when modal closes');
  }}
/>
```

When using the component as a native WebComponent, you can add an event listener on `axa-modal` that listens to the custom event `axa-close` like so:

```js
const modal = document.querySelector('axa-modal');
modal.addEventListener('axa-close', (customEvent) => {
  console.log(customEvent, 'called when modal closes');
});
```
