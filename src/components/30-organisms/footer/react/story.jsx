import AXAFooterReact from './Footer';

import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import { withMarkdown } from '../../../../../.storybook/addons/markdown';
import Readme from '../README.md';
// import withBodyReset from '../../../../../.storybook/addons/reset-body';

function setActiveLanguage(link) {
  document.getElementById(
    'clicked-link'
  ).innerText = `Last clicked link: ${link}`;
}

storiesOf('Organisms/Footer/React', module)
  .addDecorator(withMarkdown(Readme))
  // TODO Body-Reset makes react unable to pass down props to the component
  // .addDecorator(withBodyReset())
  .add('Feature - Footer Callbacks', () => {
    const div = document.createElement('div');
    div.id = 'footer';
    ReactDOM.render(
      <div>
        <AXAFooterReact onItemClick={link => setActiveLanguage(link)} dynamic>
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
        <br />
        <p id="clicked-link">Last clicked link: -</p>
      </div>,
      div
    );
    return div;
  });
