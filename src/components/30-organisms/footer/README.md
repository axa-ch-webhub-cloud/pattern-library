# Footer

The big version of the footer. It is made for the use of several custom links and also to display social media buttons to the user.

## Usage

```bash
npm install @axa-ch/footer
```

```js
import '@axa-ch/footer';
...

return `
<axa-footer>
  <h2 slot="column-0-title-desktop">axa & you</h2>
  <h2 slot="column-0-title">axa & you</h2>
  <a slot="column-0-item-0" href="https://axa.ch/en/private-customers.html" target="_blank">Contact</a>
  <a slot="column-0-item-1" href="https://axa.ch/en/private-customers.html" target="_blank">Report a claim</a>
  <a slot="column-0-item-2" href="https://axa.ch/en/private-customers.html" target="_blank">Broker</a>
  <a slot="column-0-item-3" href="https://axa.ch/en/private-customers.html" target="_blank">Job vacancies</a>
  <a slot="column-0-item-4" href="https://axa.ch/en/private-customers.html" target="_blank">MyAXA</a>
  <a slot="column-0-item-5" href="https://axa.ch/en/private-customers.html" target="_blank">Customer reviews</a>
  <a slot="column-0-item-6" href="https://axa.ch/en/private-customers.html" target="_blank">Garage Portal</a>
  <h2 slot="column-1-title-desktop">axa worldwide</h2>
  <h2 slot="column-1-title">axa worldwide</h2>
  <a slot="column-1-item-0" href="https://axa.ch/en/private-customers.html" target="_blank">AXA worldwide</a>
  <h2 slot="column-2-social-title">stay in touch</h2>
  <a slot="column-social-item-0" href="https://www.facebook.com/axach/" target="_blank"></a>
  <a slot="column-social-item-1" href="https://www.instagram.com/axaswitzerland/" target="_blank"></a>
  <a slot="column-social-item-2" href="https://twitter.com/axa_schweiz" target="_blank"></a>
  <a slot="column-social-item-3" href="https://www.xing.com/companies/AXAWINTERTHUR" target="_blank"></a>
  <a slot="column-social-item-4" href="https://www.youtube.com/axaschweiz" target="_blank"></a>
  <a slot="column-social-item-5" href="https://www.linkedin.com/company/axa/" target="_blank"></a>
</axa-footer>
`;
```

### React

Create a React-ified footer with the createElement function from your React version and then use it like this:

```js
// axa-footer.js
import { createElement } from 'react';
import createAXAFooterReact from '@axa-ch/footer/lib/index.react';

const AXAFooterReact = createAXAFooterReact(createElement);

export default AXAFooterReact;
```

```js
...
// axa-footer.jsx
import React, { Component } from 'react';
import AXAFooterReact from 'axa-footer';

class HelloWorld extends Component {
  const reactToItemClick = link => {
    console.log('A link in the footer was clicked', link);
  };

  render() {
    <AXAFooterReact onItemClick={link => reactToItemClick(link)} dynamic>
      <h2 slot="column-0-title-desktop">axa & you</h2>
      <h2 slot="column-0-title">axa & you</h2>
      <a
        slot="column-0-item-0"
        href="https://axa.ch/en/private-customers.html"
        target="_blank"
      >
        Contact
      </a>
      <a
        slot="column-0-item-1"
        href="https://axa.ch/en/private-customers.html"
        target="_blank"
      >
        Report a claim
      </a>
      <a
        slot="column-0-item-2"
        href="https://axa.ch/en/private-customers.html"
        target="_blank"
      >
        Broker
      </a>
      <a
        slot="column-0-item-3"
        href="https://axa.ch/en/private-customers.html"
        target="_blank"
      >
        Job vacancies
      </a>
      <a
        slot="column-0-item-4"
        href="https://axa.ch/en/private-customers.html"
        target="_blank"
      >
        MyAXA
      </a>
      <a
        slot="column-0-item-5"
        href="https://axa.ch/en/private-customers.html"
        target="_blank"
      >
        Customer reviews
      </a>
      <a
        slot="column-0-item-6"
        href="https://axa.ch/en/private-customers.html"
        target="_blank"
      >
        Garage Portal
      </a>
      <h2 slot="column-1-title-desktop">axa worldwide</h2>
      <h2 slot="column-1-title">axa worldwide</h2>
      <a
        slot="column-1-item-0"
        href="https://axa.ch/en/private-customers.html"
        target="_blank"
      >
        AXA worldwide
      </a>
      <h2 slot="column-2-social-title">stay in touch</h2>
      <a
        slot="column-social-item-0"
        href="https://www.facebook.com/axach/"
        target="_blank"
      />
      <a
        slot="column-social-item-1"
        href="https://www.instagram.com/axaswitzerland/"
        target="_blank"
      />
      <a
        slot="column-social-item-2"
        href="https://twitter.com/axa_schweiz"
        target="_blank"
      />
      <a
        slot="column-social-item-3"
        href="https://www.xing.com/companies/AXAWINTERTHUR"
        target="_blank"
      />
      <a
        slot="column-social-item-4"
        href="https://www.youtube.com/axaschweiz"
        target="_blank"
      />
      <a
        slot="column-social-item-5"
        href="https://www.linkedin.com/company/axa/"
        target="_blank"
      />
  </AXAFooterReact>
  }
}
```

### Pure HTML pages

Import the footer-defining script and use a footer like this:

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
    <axa-footer>
      <h2 slot="column-0-title-desktop">axa & you</h2>
      <h2 slot="column-0-title">axa & you</h2>
      <a
        slot="column-0-item-0"
        href="https://axa.ch/en/private-customers.html"
        target="_blank"
        >Contact</a
      >
      <a
        slot="column-0-item-1"
        href="https://axa.ch/en/private-customers.html"
        target="_blank"
        >Report a claim</a
      >
      <a
        slot="column-0-item-2"
        href="https://axa.ch/en/private-customers.html"
        target="_blank"
        >Broker</a
      >
      <a
        slot="column-0-item-3"
        href="https://axa.ch/en/private-customers.html"
        target="_blank"
        >Job vacancies</a
      >
      <a
        slot="column-0-item-4"
        href="https://axa.ch/en/private-customers.html"
        target="_blank"
        >MyAXA</a
      >
      <a
        slot="column-0-item-5"
        href="https://axa.ch/en/private-customers.html"
        target="_blank"
        >Customer reviews</a
      >
      <a
        slot="column-0-item-6"
        href="https://axa.ch/en/private-customers.html"
        target="_blank"
        >Garage Portal</a
      >
      <h2 slot="column-1-title-desktop">axa worldwide</h2>
      <h2 slot="column-1-title">axa worldwide</h2>
      <a
        slot="column-1-item-0"
        href="https://axa.ch/en/private-customers.html"
        target="_blank"
        >AXA worldwide</a
      >
      <h2 slot="column-2-social-title">stay in touch</h2>
      <a
        slot="column-social-item-0"
        href="https://www.facebook.com/axach/"
        target="_blank"
      ></a>
      <a
        slot="column-social-item-1"
        href="https://www.instagram.com/axaswitzerland/"
        target="_blank"
      ></a>
      <a
        slot="column-social-item-2"
        href="https://twitter.com/axa_schweiz"
        target="_blank"
      ></a>
      <a
        slot="column-social-item-3"
        href="https://www.xing.com/companies/AXAWINTERTHUR"
        target="_blank"
      ></a>
      <a
        slot="column-social-item-4"
        href="https://www.youtube.com/axaschweiz"
        target="_blank"
      ></a>
      <a
        slot="column-social-item-5"
        href="https://www.linkedin.com/company/axa/"
        target="_blank"
      ></a>
    </axa-footer>

    <script src="node_modules/@axa-ch/footer/dist/index.js"></script>
  </body>
</html>
```

## Properties

### dynamic

Set the dynamic property (boolean), if you want to use callbacks for footer-links. Otherwise the links will work the static way.

Example:

```html
<axa-footer dynamic>
  ...
</axa-footer>
```

### onItemClick

**Important:** `dynamic` needs to be set in order for this to work!

`onItemClick` is a callback function that will return the href attribute of the link that the user clicked.

Example:

```js
<axa-footer
  dynamic
  onItemClick={link => console.log('A link in the footer was clicked', link)}
>
  ...
</axa-footer>
```

### children

Because of SEO (Search Enginge Optimization), we had to ditch the easier model-based approach use use childfragments. Here is a little documentation of each slot:

| Slot                                                          | Details                                                         |
| ------------------------------------------------------------- | --------------------------------------------------------------- |
| `<h2 slot="column-0-title-desktop">axa & you</h2>`            | The title for the first column (bigger screens)                 |
| `<h2 slot="column-0-title">axa & you</h2>`                    | The title for the first column (smaller screens)                |
| `<a slot="column-0-item-X" href="" target="_blank"></a>`      | X = Number of item within the first column, supported: up to 8  |
| `<a slot="column-1-item-X" href="" target="_blank"></a>`      | X = Number of item within the second column, supported: up to 4 |
| `<h2 slot="column-2-social-title"></h2>`                      | The title for the social media section                          |
| `<a slot="column-social-item-X" href="" target="_blank"></a>` | X = Index of social media item                                  |
|                                                               |                                                                 |

**IMPORTANT:** Because of internet explorer, the list of social media buttons is currently fixed and must not be rearranged and all items are necessary!
