# AXA Toggle Switch

&lt;axa-toggle-switch&gt; provides a UI element for toggling between two states, active and inactive.
You can use it in [React controlled components](https://reactjs.org/docs/forms.html#controlled-components).

## Properties

### checked

The Boolean attribute `checked` sets the visual state of the toggle switch to active, if true, and inactive otherwise.
If `checked` is defined when first set under React, controlled-component mode is activated.

### disabled

The Boolean attribute `disabled`, when true, disables the toggle switch natively.

### error

The string attribute `error` sets an error text. Leave `error` empty, if you do not want an error text.

### onToggle

The function-valued attribute `onChange` can be used as a callback prop for React and other frameworks.

The callback prop have the following structure:

```js
    onToggle?: (checked: boolean) => void;
```

## Events

A `change` event and custom event is fired on the component itself. The events bubble and are cancellable. The Custom Event `axa-toggle-switch-toggle` `detail` property contains `{`
checked: boolean `}`, where the meaning of active is as defined above for the same-named property.
