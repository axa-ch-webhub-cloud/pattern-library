# Cookie disclaimer

Shows a message that explains the conditions of the Data Protection Act. By
clicking on the button, the component stores the date and time as an identifier in the local storage, tracking when the user has clicked. If an identifier is stored, the cookie disclaimer wont show anymore till the user deletes its cache.

## Usage

```bash
npm install @axa-ch/cookie-disclaimer
```

```js
import '@axa-ch/cookie-disclaimer';
...
<axa-cookie-disclaimer></axa-cookie-disclaimer>
```

### React

Create a React-ified cookie-disclaimer with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXACookieDisclaimerReact from '@axa-ch/cookie-disclaimer/lib/index.react';

const AXACookieDisclaimerReact = createAXACookieDisclaimerReact(createElement);

export default AXACookieDisclaimerReact;
```

```js
<AXACookieDisclaimerReact
  onClick={handler}
  title="Any Title"
  buttonname="Click me"
>
  <p>
    Any Description for the cookie disclaimer with a link
    <AXALinkReact
      variant="arrowright-animated-white"
      href="https://axa.ch/de/informationen/datenschutz.html"
    >
      Data protection
    </AXALinkReact>
  </p>
</AXACookieDisclaimerReact>
```

### Pure HTML pages

Import the cookie-disclaimer-defining script and use a cookie-disclaimer like this:

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
    <axa-cookie-disclaimer title="Any Title" buttonname="Click me">
      <p>
        Any Description for the cookie disclaimer with a link
        <axa-link
          variant="arrowright-animated-white"
          href="https://axa.ch/de/informationen/datenschutz.html"
          >Data protection</axa-link
        >
      </p>
    </axa-cookie-disclaimer>
    <script src="node_modules/@axa-ch/cookie-disclaimer/dist/index.js"></script>
  </body>
</html>
```

## Properties

### Variant

| Attribute         | Details                                                   |
| ----------------- | --------------------------------------------------------- |
| `variant="fixed"` | Adds position fixed and put it to the end of the viewport |

### Title

The attribute `title` specifies the title of the cookie disclaimer

### Button Name

The attribute `buttonname` specifies the text on the accept button

### onClick

The function-valued attribute `onClick` can be used as a callback prop for React and other frameworks.
