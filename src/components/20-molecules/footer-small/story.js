/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import withNoBorder from '../../../../.storybook/addons/no-border';
import Readme from './README.md';

storiesOf('Molecules/Footer Small', module)
  .addDecorator(withNoBorder)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })

  .add(
    'Footer Small',
    () => `<axa-footer-small dy>
      <a slot="language-item" href="https://axa.ch/de/privatkunden.html">
        DE
      </a>
      <a
        slot="language-item"
        className="m-footer-small__link--active"
        href="https://axa.ch/fr/particuliers.html"
      >
        FR
      </a>
      <a slot="language-item" href="https://axa.ch/it/clienti-privati.html">
        IT
      </a>
      <a slot="language-item" href="https://axa.ch/en/private-customers.html">
        EN
      </a>
      <a
        slot="disclaimer-item"
        href="https://axa.ch/en/information/terms-of-use.html"
      >
        Terms of use
      </a>
      <a
        slot="disclaimer-item"
        href="https://axa.ch/en/information/data-protection.html"
      >
        Data protection
      </a>
      <span slot="copyright">© 2019 AXA Insurance Ltd.</span>
    </axa-footer-small>`
  );
