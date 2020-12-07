/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import DemoFooterSmallDynamicChildren from './footerSmallDynamicChildren';
import DemoFooterSmall from './FooterSmall';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import withNoBorder from '../../../../../.storybook/addons/no-border';

export default {
  title: 'Examples/Footer Small/React',
  decorators: [withNoBorder],
  parameters: {
    readme,
    changelog,
  },
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
