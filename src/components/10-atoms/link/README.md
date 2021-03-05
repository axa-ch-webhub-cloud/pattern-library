# Link

The link component meant for hyper and simple links. Links can be styled via several properties to change their look-and-feel.

All links support the colors "red" and "white" if declared within the `variant` attribute. See the explanation below.

## Properties

### variant (Simple Links)

#### Default color

| Attribute                       | Details                           |
| ------------------------------- | --------------------------------- |
| `variant="icon"`                | Link with an icon displayed       |
| `variant="arrowright"`          | Link with arrow icon to the right |
| `variant="arrowleft"`           | Link with arrow icon to the left  |
| `variant="arrowleft-animated"`  | Link with animated arrow icon     |
| `variant="arrowright-animated"` | Link with animated arrow icon     |

#### Red color

| Attribute                           | Details                           |
| ----------------------------------- | --------------------------------- |
| `variant="icon-red"`                | Link with an icon displayed       |
| `variant="arrowright-red"`          | Link with arrow icon to the right |
| `variant="arrowleft-red"`           | Link with arrow icon to the left  |
| `variant="arrowleft-animated-red"`  | Link with animated arrow icon     |
| `variant="arrowright-animated-red"` | Link with animated arrow icon     |

#### white color

| Attribute                             | Details                                |
| ------------------------------------- | -------------------------------------- |
| `variant="white"`                     | Link white                             |
| `variant="hyperlink-white"`           | Link white in lowercase                |
| `variant="hyperlink-white-underline"` | Link white in lowercase and underlined |
| `variant="icon-white"`                | Link with an icon displayed            |
| `variant="arrowright-white"`          | Link with arrow icon to the right      |
| `variant="arrowleft-white"`           | Link with arrow icon to the left       |
| `variant="arrowleft-animated-white"`  | Link with animated arrow icon          |
| `variant="arrowright-animated-white"` | Link with animated arrow icon          |

### href

The string-valued attribute `href` is used like in a native &lt;a&gt; hyperlink.

### external

The Boolean attribute `external` adds the `target="_blank"` functionality.

### icon

If the variant is `icon`, using the attribute `icon`'s string value as icon name, an icon will be rendered. The attributes `variant=icon` and `icon=xyz` both need to exist in order for an icon to be displayed. To see the full list of possible icons and custom icon usage, see the [axa-icon](https://github.com/axa-ch/patterns-library/blob/develop/src/components/10-atoms/icon/README.md) readme. The dimensions of the icons depends on `icon` component. Because of this its possible that some icons are bigger than the `link` text.

### onClick

On a React-ified component this function-valued attribute can be used as a callback function. Using it will prevent default link navigation.
Click event object is passed as argument. This allows the consumer to stopPropagation() of the event.
