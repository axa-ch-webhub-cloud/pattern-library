/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import Readme from './README.md';

const selectedLanguageKey = 'en';

storiesOf('Molecules/Footer Small/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Footer Small - Dynamic Links', () => {
    const languages = [
      { key: 'de', text: 'DE' },
      { key: 'fr', text: 'FR' },
      { key: 'it', text: 'IT' },
      { key: 'en', text: 'EN' },
    ];

    const disclaimer = [
      { key: 'tos', text: 'Terms of use' },
      { key: 'privacy', text: 'Data protection' },
    ];

    const wrapper = document.createElement('div');
    const activeLanguage = document.createElement('p');
    activeLanguage.id = 'active-language';
    activeLanguage.innerText = `Currently selected language: ${selectedLanguageKey}`;
    const clickedDisclaimer = document.createElement('p');
    clickedDisclaimer.id = 'clicked-disclaimer';
    clickedDisclaimer.innerText = `Disclaimer changed to: -`;

    const footerSmall = document.createElement('axa-footer-small');
    footerSmall.activeLanguage = selectedLanguageKey;
    footerSmall.languageItems = languages;
    footerSmall.disclaimerItems = disclaimer;
    footerSmall.copyrightText = '© 2019 AXA Insurance Ltd.';
    footerSmall.dynamic = true;

    wrapper.appendChild(activeLanguage);
    wrapper.appendChild(clickedDisclaimer);
    wrapper.appendChild(footerSmall);

    footerSmall.addEventListener('axa-language-change', languageEvent => {
      const languageResult = document.getElementById('active-language');
      languageResult.innerText = `Currently selected language: ${
        languageEvent.detail
      }`;
    });

    footerSmall.addEventListener('axa-disclaimer-change', disclaimerEvent => {
      const clickedDisclaimers = document.getElementById('clicked-disclaimer');
      clickedDisclaimers.innerText = `Disclaimer changed to: ${
        disclaimerEvent.detail
      }`;
    });

    return wrapper;
  });
