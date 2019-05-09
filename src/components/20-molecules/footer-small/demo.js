/* global document */
import { storiesOf } from '@storybook/html';
import './index';

import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

const selectedLanguage = 'EN';

storiesOf('Molecules/Footer Small/Demos', module)
  .addDecorator(withMarkdown(Readme))
  .add('Footer Small - Dynamic Links', () => {
    const languages = [
      { text: 'DE' },
      { text: 'FR' },
      { text: 'IT' },
      { text: 'EN' },
    ];

    const disclaimer = [{ text: 'Terms of use' }, { text: 'Data protection' }];

    const wrapper = document.createElement('div');
    const activeLanguage = document.createElement('p');
    activeLanguage.id = 'active-language';
    activeLanguage.innerText = `Current Language: ${selectedLanguage}`;
    const clickedDisclaimer = document.createElement('p');
    clickedDisclaimer.id = 'clicked-disclaimer';
    clickedDisclaimer.innerText = `Current disclaimer item: -`;

    const footerSmall = document.createElement('axa-footer-small');
    footerSmall.activeLanguage = selectedLanguage;
    footerSmall.languageItems = languages;
    footerSmall.disclaimerItems = disclaimer;
    footerSmall.copyrightText = '© 2019 AXA Insurance Ltd.';
    footerSmall.dynamic = true;

    wrapper.appendChild(footerSmall);
    wrapper.appendChild(activeLanguage);
    wrapper.appendChild(clickedDisclaimer);

    footerSmall.addEventListener('axa-language-change', languageEvent => {
      const languageResult = document.getElementById('active-language');
      languageResult.innerText = `Current Language: ${languageEvent.detail}`;
    });

    footerSmall.addEventListener('axa-disclaimer-change', disclaimerEvent => {
      const clickedDisclaimers = document.getElementById('clicked-disclaimer');
      clickedDisclaimers.innerText = `Current disclaimer item: ${
        disclaimerEvent.detail
      }`;
    });

    return wrapper;
  });
