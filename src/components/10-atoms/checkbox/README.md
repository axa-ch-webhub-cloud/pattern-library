# AXA Checkbox

Checkboxes provide a UI element for toggling between two visual states, checked and unchecked.
They can be labelled with text to explain the semantics of the checked state to users. Checkboxes
can be used in HTML forms as well as [React controlled components](https://reactjs.org/docs/forms.html#controlled-components).

For grouping multiple related checkboxes in a style-guide-conformant fashion see [&lt;axa-fieldset&gt;](https://github.com/axa-ch-webhub-cloud/pattern-library/tree/develop/src/components/10-atoms/fieldset).

## Properties

Unless otherwise noted, properties can be set via attributes or properties.
Starred property names are reflected to attributes.

### name\*

The string-valued `name` of the checkbox for purposes of form submission.

### value

The string-valued `value` of the checkbox for purposes of form submission.

### label

The string-valued `label` provides the label text. When no label is set and the component has no children, no &lt;label&gt; will be rendered for reasons of semantic HTML.

HTML markup is permitted as value, subject to being single-rooted (see below). Such `label` values must respect the [specification](https://html.spec.whatwg.org/multipage/syntax.html#syntax-attributes).

A label value can also be specified via the component's children. Note that such HTML child content must be single-rooted, and that `<label>` is not a permissible child root (to prevent improper nesting with the element-provided `<label>`). The component wraps its children in `<p>` for accessibility.

_Note: The use of component children for label specification is discouraged for technical reasons. We recommend `styled` HTML labels instead._

### styled

The Boolean attribute `styled`, when used in conjunction with HTML-valued `label`, ensures that the styling of such labels is appropriate.

### variant

| Attribute                      | Details                                                                                                     |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| `variant="square"`             | Provides a filled square in the icon (default)                                                              |
| `variant="checkmark"`          | Provides a checkmark in the icon                                                                            |
| `variant="checkmark-inverted"` | Provides a checkmark in the icon with inverted color. Just use it if you have background-color "blue-teal". |

### refId

The string-valued `refId` sets the reference ID for label and input. If no `refId` is set, a random ID will be created.

### required

The Boolean attribute `required` visualizes an element that must obligatorily be filled by the user. When true, displays `*` after the label text.

### checked\*

The Boolean `checked` sets the checked/unchecked visual state.

### defaultChecked

The Boolean `defaultChecked` sets the initial checked state. It is only available under React.

### disabled\*

The Boolean `disabled` disables the checkbox natively.

### error\*

The string-valued `error` provides an error text as HTML. It sets the checkbox into a visual error state.

## Callbacks

### onChange

The function-valued property `onChange` can be used as a callback prop for React and other frameworks. Its only parameter is the corresponding native event from the underlying `<input>` element.

It is especially significant when used together with `value` to implement controlled-component
behaviour under React.

### onFocus

The function-valued property `onFocus` can be used as a callback prop for React and other frameworks.
Its only parameter is the corresponding native event from the underlying `<input>` element.

### onBlur

The function-valued property `onBlur` can be used as a callback prop for React and other frameworks.
Its only parameter is the corresponding native event from the underlying `<input>` element.
