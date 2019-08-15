# Policy features

With this component you can highlight as much `features` as you want. You can set a main title and put `features` items as childs to it. This component changes sizes according to the viewport.

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/policy-features
```

```js
import '@axa-ch/policy-features';
```

```html
<axa-policy-features title="Your main title" axastyle="dark-indigo">
  <axa-policy-features-item
    title="The title of item"
    icon="email"
    description="A text which can be as long as you want."
  ></axa-policy-features-item>
</axa-policy-features>
```

### React

You can use this component directly in your JSX without further React-ification (see Usage above).

### Pure HTML pages

Import the policy-features-defining script and use a policy-features like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Your awesome title</title>
  </head>
  <body>
    <axa-policy-features title="Your main title" axastyle="dark-indigo">
      <axa-policy-features-item
        title="The title of item"
        icon="email"
        description="A text which can be as long as you want."
      ></axa-policy-features-item>
    </axa-policy-features>
    <script src="node_modules/@axa-ch/policy-features/dist/index.js"></script>
  </body>
</html>
```

## Properties

### Variant

| Attribute                | Details                                                          |
| ------------------------ | ---------------------------------------------------------------- |
| `axastyle="default"`     | background is `dark-indigo` and font color is set automatically. |
| `axastyle="dark-indigo"` | background is `dark-indigo` and font color is set automatically. |
| `axastyle="axa-blue"`    | background is `axa-blue` and font color is set automatically.    |
| `axastyle="wild-sand"`   | background is `wild-sand` and font color is set automatically.   |
| `axastyle="white"`       | background is `white` and font color is set automatically.       |

### title

The attribute `title` (optional) specifies the main title at the top.

### axastyle

The attribute `axastyle` (optional) specifies the background and the font color of this component and all its children.

### Migration Notes

You don't have to pay attention to anything for upgrading to newer version.

# axa-policy-features-item

You have to set `axa-policy-features-item` as childs of `axa-policy-features`. It renders a icon on top, a headline and a description text. Usage see examples above.

## Properties

### Variant

| Attribute                            | Details                                 |
| ------------------------------------ | --------------------------------------- |
| `icon="email"`                       | The email icon of our icon-set.         |
| `icon="https://url-to-svg-icon.svg"` | Loads the url and sets content as icon. |

### title

The attribute `title` (optional) specifies the title of your feature.

### icon

You can set a icon of our icon-set (variants above) or a URL to a svg.

Sizes:

- 42x42 px
- `md-up`: 96x96 px

### description

A text that describes your feature.
