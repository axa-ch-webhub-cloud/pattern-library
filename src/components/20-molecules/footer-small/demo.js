/* global document */
import './index';
import withNoBorder from '../../../../.storybook/addons/no-border';
import changelog from './CHANGELOG.md';
import readme from './README.md';

const selectedLanguageKey = '-';

export default {
  title: 'Examples/Footer Small/Pure HTML',
  decorators: [withNoBorder],

  parameters: {
    readme,
    changelog,
    controls: { disabled: true },
  },
};

export const DynamicLinks = () => {
  const wrapper = document.createElement('div');
  const activeLanguage = document.createElement('p');
  activeLanguage.id = 'active-language';
  activeLanguage.innerText = `Language - Index Clicked: ${selectedLanguageKey}`;
  const clickedDisclaimer = document.createElement('p');
  clickedDisclaimer.id = 'clicked-disclaimer';
  clickedDisclaimer.innerText = `Disclaimer - Index Clicked: -`;

  const footerSmall = document.createElement('axa-footer-small');
  footerSmall.dynamic = true;

  const deLanguageLink = document.createElement('a');
  deLanguageLink.slot = 'language-item';
  deLanguageLink.href = 'https://axa.ch/de/privatkunden.html';
  deLanguageLink.classList.add('m-footer-small__link--active');
  deLanguageLink.textContent = 'DE';

  const frLanguageLink = document.createElement('a');
  frLanguageLink.slot = 'language-item';
  frLanguageLink.href = 'https://axa.ch/de/privatkunden.html';
  frLanguageLink.textContent = 'FR';

  const itLanguageLink = document.createElement('a');
  itLanguageLink.slot = 'language-item';
  itLanguageLink.href = 'https://axa.ch/de/privatkunden.html';
  itLanguageLink.textContent = 'IT';

  const enLanguageLink = document.createElement('a');
  enLanguageLink.slot = 'language-item';
  enLanguageLink.href = 'https://axa.ch/de/privatkunden.html';
  enLanguageLink.textContent = 'EN';

  const termsOfUseLink = document.createElement('a');
  termsOfUseLink.slot = 'disclaimer-item';
  termsOfUseLink.href = 'https://axa.ch/en/information/terms-of-use.html';
  termsOfUseLink.textContent = 'Terms of use';

  const dataProtectionLink = document.createElement('a');
  dataProtectionLink.slot = 'disclaimer-item';
  dataProtectionLink.href =
    'https://axa.ch/en/information/data-protection.html';
  dataProtectionLink.textContent = 'Data protection';

  const copyRightText = document.createElement('span');
  copyRightText.slot = 'copyright';
  copyRightText.textContent = '&copy; 2019 AXA Insurance Ltd.';

  footerSmall.appendChild(deLanguageLink);
  footerSmall.appendChild(frLanguageLink);
  footerSmall.appendChild(itLanguageLink);
  footerSmall.appendChild(enLanguageLink);
  footerSmall.appendChild(termsOfUseLink);
  footerSmall.appendChild(dataProtectionLink);
  footerSmall.appendChild(copyRightText);

  wrapper.appendChild(activeLanguage);
  wrapper.appendChild(clickedDisclaimer);
  wrapper.appendChild(footerSmall);

  footerSmall.addEventListener('axa-language-click', languageEvent => {
    const languageResult = document.getElementById('active-language');
    languageResult.innerText = `Language - Index Clicked: ${languageEvent.detail}`;
  });

  footerSmall.addEventListener('axa-disclaimer-click', disclaimerEvent => {
    const clickedDisclaimers = document.getElementById('clicked-disclaimer');
    clickedDisclaimers.innerText = `Disclaimer - Index Clicked: ${disclaimerEvent.detail}`;
  });

  return wrapper;
};
