# Policy features

With this component you can highlight as much `features` as you want. You can set a main title and put `features` items as childs to it.

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/policy-features
```

```js
import '@axa-ch/policy-features';
import { EmailSvg } from '@axa-ch/materials/icons';
import { svg } from 'lit-element';
```

```html
<axa-policy-features title="Your main title" variant="dark-indigo">
  <axa-policy-features-item
    title="The title of item"
    description="In this example the svg is set as a child with lit html."
  >
    ${svg([EmailSvg])}
  </axa-policy-features-item>
  <axa-policy-features-item
    title="Title no. 2"
    description="You can set your ican with a url."
    iconurl="https://here-is-my-icon.svg"
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
    <axa-policy-features title="Your main title" variant="dark-indigo">
      <axa-policy-features-item
        title="The title of item"
        description="In this example the svg is set as a child."
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M6.167 1.519c-.562 0-1.1.222-1.495.617a2.082 2.082 0 0 0-.611 1.488v16.752a2.082 2.082 0 0 0 .611 1.488c.395.395.933.617 1.495.617h12.666a2.114 2.114 0 0 0 2.106-2.09V7.82l-6.333-6.286-8.44-.015zm7.394 7.338V3.09l5.795 5.767H13.56z"
            fill="currentColor"
          />
        </svg>
      </axa-policy-features-item>
      <axa-policy-features-item
        title="Title no. 2"
        description="You can set your ican with a url."
        iconurl="https://here-is-my-icon.svg"
      ></axa-policy-features-item>
    </axa-policy-features>
    <script src="node_modules/@axa-ch/policy-features/dist/index.js"></script>
  </body>
</html>
```

## Properties

### variant

The attribute `variant` (optional) specifies the background and the font color of this component and all its children.

| Attribute               | Details                                                          |
| ----------------------- | ---------------------------------------------------------------- |
| `variant="dark-indigo"` | background is `dark-indigo` and font color is set automatically. |
| `variant="axa-blue"`    | background is `axa-blue` and font color is set automatically.    |
| `variant="wild-sand"`   | background is `wild-sand` and font color is set automatically.   |
| `variant="white"`       | background is `white` and font color is set automatically.       |

### title

The attribute `title` (optional) specifies the main title at the top.

### Migration Notes

You don't have to pay attention to anything for upgrading to newer version.

# axa-policy-features-item

You have to set `axa-policy-features-item` as childs of `axa-policy-features`. It renders a icon on top, a headline and a description text. Usage see examples above.

## Properties

### title

The attribute `title` (optional) specifies the title of your feature.

### iconurl

You can set a URL to a svg, for example `https://url-to-svg-icon.svg`. The size of the svg will be set to:

- Tablet and bigger (`md-up`): 96x96 px
- All smaller devices: 42x42 px

### icon (as a child)

You can also set any svg you want if you set it as a child of dom node `axa-policy-features-item`. See example above.

### description

A text that describes your feature.
