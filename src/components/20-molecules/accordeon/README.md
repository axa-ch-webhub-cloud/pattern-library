# Accordeon

An accordion UI element hides a text or other piece of information by default and can reveal them if requested by user gesture.

## Properties

### disabled

Boolean attribute `disabled` disables the accordeon (default: false). Users can not open or close the accordeon anymore. However, it is still possible to programmatically open the accordion by way of the `open` attribute.

### open

Boolean attribute `open` opens the accordeon when set to a truthy value (default: false). This is a second way to open the accordeon besides clicking on it. This can be useful when you use the `disabled` attribute.

### small

Boolean attribute `small` controls a smaller version of the accordeon (default: false).

### title

String-valued `title` sets the title of the accordeon.

### icon

String-valued `icon` sets the additional icon of the accordeon according to a valid `<svg>...</svg>` value. Leave unset if no icon is required.
