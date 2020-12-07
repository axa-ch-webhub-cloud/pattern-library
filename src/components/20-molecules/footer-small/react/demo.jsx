import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import withNoBorder from '../../../../../.storybook/addons/no-border';
import AXAFooterSmallStory from './FooterSmallStory';
import DemoFooterSmallDynamicChildren from './footerSmallDynamicChildren';
import DemoFooterSmall from './FooterSmall';

export default {
  title: 'Examples/Footer Small/React',
  decorators: [withNoBorder],
  parameters: {
    readme,
    changelog,
  },
};

export const Story = ({
  language1,
  language2,
  language3,
  language4,
  termsOfUse,
  dataProtection,
}) => {
  const div = document.createElement('div');
  div.id = 'footer-small';
  ReactDOM.render(
    <AXAFooterSmallStory>
      <a
        slot="language-item"
        href="https://axa.ch/de/privatkunden.html"
        className="m-footer-small__link--active"
      >
        {language1}
      </a>
      <a slot="language-item" href="https://axa.ch/fr/particuliers.html">
        {language2}
      </a>
      <a slot="language-item" href="https://axa.ch/it/clienti-privati.html">
        {language3}
      </a>
      <a slot="language-item" href="https://axa.ch/en/private-customers.html">
        {language4}
      </a>
      <a
        slot="disclaimer-item"
        href="https://axa.ch/en/information/terms-of-use.html"
      >
        {termsOfUse}
      </a>
      <a
        slot="disclaimer-item"
        href="https://axa.ch/en/information/data-protection.html"
      >
        {dataProtection}
      </a>
      <span slot="copyright">&copy; 2019 AXA Insurance Ltd.</span>
    </AXAFooterSmallStory>,
    div
  );
  return div;
};

Story.args = {
  language1: 'DE',
  language2: 'FR',
  language3: 'IT',
  language4: 'EN',
  termsOfUse: `Terms of use`,
  dataProtection: `Data protection`,
};

Story.argTypes = {
  language1: { name: 'set first language' },
  language2: { name: 'set second language' },
  language3: { name: 'set third language' },
  language4: { name: 'set fourth language' },
  termsOfUse: { name: 'set terms of use' },
  dataProtection: { name: 'set data protection' },
};

export const CallbacksOnLanguage = () => {
  const div = document.createElement('div');
  div.id = 'footer-small';
  ReactDOM.render(
    <DemoFooterSmall
      language1="DE"
      language2="FR"
      language3="IT"
      language4="EN"
      termsOfUse="Terms of use"
      dataProtection="Data protection"
    />,
    div
  );
  return div;
};

export const DynamicChangeOfChildrenUponLanguageChange = () => {
  const div = document.createElement('div');
  div.id = 'footer-small-dynamic-children';
  ReactDOM.render(<DemoFooterSmallDynamicChildren />, div);
  return div;
};
