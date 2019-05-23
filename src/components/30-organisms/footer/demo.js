/* global document */
import { storiesOf } from '@storybook/html';
import './index';

import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Organisms/Footer/Demos', module)
  .addDecorator(withMarkdown(Readme))
  .add('Feature - Footer Callbacks', () => {
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

    const wrapper = document.createElement('div');
    const clickedLink = document.createElement('p');
    clickedLink.id = 'clicked-link';
    clickedLink.innerText = 'Last clicked link: -';

    const footer = document.createElement('axa-footer');
    footer.content = content;
    footer.social = social;
    footer.dynamic = true;

    wrapper.appendChild(footer);
    wrapper.appendChild(clickedLink);

    footer.addEventListener('axa-link-click', ev => {
      clickedLink.innerText = `Last clicked link: ${ev.detail}`;
    });

    return wrapper;
  });
