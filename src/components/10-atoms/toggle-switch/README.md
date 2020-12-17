# AXA Toggle Switch

&lt;axa-toggle-switch&gt; provides a UI element for toggling between two states, active and inactive.
You can use it in [React controlled components](https://reactjs.org/docs/forms.html#controlled-components).

## Properties

### active

The Boolean attribute `active` sets the visual state of the toggle switch to active, if true, and inactive otherwise.
If `active` is defined when first set under React, controlled-component mode is activated.

### disabled

The Boolean attribute `disabled`, when true, disables the toggle switch natively.

### onChange

The function-valued attribute `onChange` can be used as a callback prop for React and other frameworks.

The "onChange" handler will receive a synthetic event of the following structure:

```js
{
  target: {
    checked: true / false;
  }
}
```

## Events

A `change` event is fired on the component itself. The event bubbles and is cancellable. Its `detail` property contains
this object: `{active}`, where the meaning of active is as defined above for the same-named property.
