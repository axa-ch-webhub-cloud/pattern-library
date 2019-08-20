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
```

```html
<axa-policy-features title="Your main title" variant="dark-indigo">
  <axa-policy-features-item
    title="The title of item"
    description="In this example the svg is set as a child with lit html."
    icon="${EmailSvg}"
  ></axa-policy-features-item>
  <axa-policy-features-item
    title="Title no. 2"
    description="You can set your ican with a url."
    icon="https://here-is-my-icon.svg"
  ></axa-policy-features-item>
</axa-policy-features>
```

### React

Create a React-ified policy feature with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXAPolicyFeaturesReact from '@axa-ch/policy-features/lib/index.react';
import createAXAPolicyFeaturesItemReact from '@axa-ch/policy-features/policy-features-item/lib/index.react';
import { EmailSvg } from '@axa-ch/materials/icons';

const AXAPolicyFeaturesReact = createAXAPolicyFeaturesReact(createElement);
const AXAPolicyFeaturesItemReact = createAXAPolicyFeaturesItemReact(
  createElement
);

export default AXAPolicyFeaturesReact;
```

```js
<AXAPolicyFeaturesReact title={title} variant={variants}>
  <AXAPolicyFeaturesItemReact
    title="24/7 assistance"
    description="We reward safe drivers."
    icon={EmailSvg}
  />
  <AXAPolicyFeaturesItemReact
    title="24/7 assistance"
    description="We reward safe drivers : 75% no claims discount + an extra 10% off if you get a quote online. This is a long text."
    icon={EmailSvg}
  />
  <AXAPolicyFeaturesItemReact
    title="Discount partners"
    description="We reward safe drivers."
    icon={EmailSvg}
  />
  <AXAPolicyFeaturesItemReact
    title="Online & Apps"
    description="We reward safe drivers : 75% no claims discount + an extra 10% off if you get a quote online"
    icon={EmailSvg}
  />
</AXAPolicyFeaturesReact>
```

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
        icon="<svg xmlns='http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.99 19a1.34 1.34 0 0 1-.962-.4L1.399 9.27c-1.238-1.199.688-3.11 1.926-1.865l8.666 8.352 8.665-8.352c1.238-1.2 3.21.666 1.926 1.866l-9.629 9.33c-.229.266-.596.399-.962.399z' fill='currentColor'/></svg>"
      ></axa-policy-features-item>
      <axa-policy-features-item
        title="Title no. 2"
        description="You can set your ican with a url."
        icon="https://here-is-my-icon.svg"
      ></axa-policy-features-item>
    </axa-policy-features>
    <script src="node_modules/@axa-ch/policy-features/dist/index.js"></script>
  </body>
</html>
```

## Properties

### variant

The attribute `variant` (optional) specifies the background and the font color of this component and all its children.

| Attribute             | Details                                                          |
| --------------------- | ---------------------------------------------------------------- |
| `variant=""`          | background is `dark-indigo` and font color is set automatically. |
| `variant="axa-blue"`  | background is `axa-blue` and font color is set automatically.    |
| `variant="wild-sand"` | background is `wild-sand` and font color is set automatically.   |
| `variant="white"`     | background is `white` and font color is set automatically.       |

### title

The attribute `title` (optional) specifies the main title at the top.

### Migration Notes

You don't have to pay attention to anything for upgrading to newer version.

# axa-policy-features-item

You have to set `axa-policy-features-item` as childs of `axa-policy-features`. It renders a icon on top, a headline and a description text. Usage see examples above.

## Properties

### title

The attribute `title` (optional) specifies the title of your feature.

### icon

You can set a URL to a svg, for example `https://url-to-svg-icon.svg`. Instead of that you can set a svg as a string (if you import a icon or image from `@axa-ch/materials`).

The size of the svg will be set to:

- Tablet and bigger (`md-up`): 96x96 px
- All smaller devices: 42x42 px

### description

A text that describes your feature.
