# Accordion

An accordion UI element hides a text or other piece of information by default and can reveal them if requested by user gesture.

## Properties

### disabled

Boolean attribute `disabled` disables the accordion (default: false). Users can not open or close the accordion anymore. However, it is still possible to programmatically open the accordion by way of the `open` attribute.

### open

Boolean attribute `open` opens the accordion when set to a truthy value (default: false). This is a second way to open the accordion besides clicking on it. This can be useful when you use the `disabled` attribute.

### small

Boolean attribute `small` controls a smaller version of the accordion (default: false).

### title

String-valued `title` sets the title of the accordion.

### icon

String-valued `icon` sets the additional icon of the accordion according to a valid `<svg>...</svg>` value. Leave unset if no icon is required.

### onStateChange

The function-valued attribute `onStateChange` can be used as a callback prop for React and other frameworks. The value(`isOpen`) is the `open` property.

## Events

The custom events `axa-state-change` whenever `onStateChange` fires (see above). The `event.detail` value is the `open` property .
