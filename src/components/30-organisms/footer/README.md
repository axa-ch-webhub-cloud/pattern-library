# Footer

The big version of the footer. It is made for the use of several custom links and also to display social media buttons to the user.

## Usage

```bash
npm install @axa-ch/footer
```

```js
import '@axa-ch/footer';
...

const content = JSON.stringify([
  {
    title: 'axa & you',
    items: [
      {
        text: 'Contact',
        link: 'https://axa.ch/en/private-customers.html',
        external: true,
      },
      {
        text: 'Report a claim',
        link: 'https://axa.ch/en/private-customers.html',
        external: true,
      },
      {
        text: 'Broker',
        link: 'https://axa.ch/en/private-customers.html',
        external: true,
      },
      {
        text: 'Job vacancies',
        link: 'https://axa.ch/en/private-customers.html',
      },
      { text: 'MyAXA', link: 'https://axa.ch/en/private-customers.html' },
      {
        text: 'Customer reviews',
        link: 'https://axa.ch/en/private-customers.html',
      },
      {
        text: 'Garage Portal',
        link: 'https://axa.ch/en/private-customers.html',
      },
    ],
  },
  {
    title: 'axa worldwide',
    items: [
      {
        text: 'AXA worldwide',
        link: 'https://axa.ch/en/private-customers.html',
        external: true,
      },
    ],
  },
]);

const social = JSON.stringify({
  title: 'stay in touch',
  icons: [
    { title: 'facebook', link: 'https://www.facebook.com/axach/' },
    {
      title: 'instagram',
      link: 'https://www.instagram.com/axaswitzerland/',
    },
    { title: 'twitter', link: 'https://twitter.com/axa_schweiz' },
    { title: 'xing', link: 'https://www.xing.com/companies/AXAWINTERTHUR' },
    { title: 'youtube', link: 'https://www.youtube.com/axaschweiz' },
    { title: 'linkedin', link: 'https://www.linkedin.com/company/axa/' },
  ],
});

return `<axa-footer content='${content}' social='${social}'></axa-footer>`;
```

### React

Create a React-ified footer with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXAFooterReact from '@axa-ch/footer/lib/index.react';

const AXAFooterReact = createAXAFooterReact(createElement);

export default AXAFooterReact;
```

```js
...

const content = [
  {
    title: 'axa & you',
    items: [
      {
        text: 'Contact',
        link: 'https://axa.ch/en/private-customers.html',
        external: true,
      },
      {
        text: 'Report a claim',
        link: 'https://axa.ch/en/private-customers.html',
        external: true,
      },
      {
        text: 'Broker',
        link: 'https://axa.ch/en/private-customers.html',
        external: true,
      },
      {
        text: 'Job vacancies',
        link: 'https://axa.ch/en/private-customers.html',
      },
      { text: 'MyAXA', link: 'https://axa.ch/en/private-customers.html' },
      {
        text: 'Customer reviews',
        link: 'https://axa.ch/en/private-customers.html',
      },
      {
        text: 'Garage Portal',
        link: 'https://axa.ch/en/private-customers.html',
      },
    ],
  },
  {
    title: 'axa worldwide',
    items: [
      {
        text: 'AXA worldwide',
        link: 'https://axa.ch/en/private-customers.html',
        external: true,
      },
    ],
  },
];

const social = {
  title: 'stay in touch',
  icons: [
    { title: 'facebook', link: 'https://www.facebook.com/axach/' },
    {
      title: 'instagram',
      link: 'https://www.instagram.com/axaswitzerland/',
    },
    { title: 'twitter', link: 'https://twitter.com/axa_schweiz' },
    { title: 'xing', link: 'https://www.xing.com/companies/AXAWINTERTHUR' },
    { title: 'youtube', link: 'https://www.youtube.com/axaschweiz' },
    { title: 'linkedin', link: 'https://www.linkedin.com/company/axa/' },
  ],
};

const reactToItemClick = () => {
  console.log('A link in the footer was clicked');
};

...

<AXAFooterReact
  content={content}
  social={social}
  onItemClick={reactToItemClick}
  dynamic // Necessary switch from static links to callbacks
/>
);
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
    <axa-footer
      content='[{"title":"axa &amp; you","items":[{"text":"Contact","link":"https://axa.ch/en/private-customers.html","external":true},{"text":"Report a claim","link":"https://axa.ch/en/private-customers.html","external":true},{"text":"Broker","link":"https://axa.ch/en/private-customers.html","external":true},{"text":"Job vacancies","link":"https://axa.ch/en/private-customers.html"},{"text":"MyAXA","link":"https://axa.ch/en/private-customers.html"},{"text":"Customer reviews","link":"https://axa.ch/en/private-customers.html"},{"text":"Garage Portal","link":"https://axa.ch/en/private-customers.html"}]},{"title":"axa worldwide","items":[{"text":"AXA worldwide","link":"https://axa.ch/en/private-customers.html","external":true}]}]'
      social='{"title":"stay in touch","icons":[{"title":"facebook","link":"https://www.facebook.com/axach/"},{"title":"instagram","link":"https://www.instagram.com/axaswitzerland/"},{"title":"twitter","link":"https://twitter.com/axa_schweiz"},{"title":"xing","link":"https://www.xing.com/companies/AXAWINTERTHUR"},{"title":"youtube","link":"https://www.youtube.com/axaschweiz"},{"title":"linkedin","link":"https://www.linkedin.com/company/axa/"}]}'
    ></axa-footer>

    <script src="node_modules/@axa-ch/footer/dist/index.js"></script>
  </body>
</html>
```

## Properties

### content

Title and links to display within the footer.

Structure:

```typescript
[
  {
    title: string,
    items: [
      {
        text: string,
        link: string,
        external: boolean,
      },
    ],
  },
];
```

### social

Social media icons and their corresponding links. Also coming with a customizable title.

Structure:

```typescript
{
  title: string,
  icons: [
    {
      title: string,
      link: string
    },
  ],
};
```

### dynamic

Set the dynamic property (boolean), if you want to use callbacks for links. Otherwise they will not work.
