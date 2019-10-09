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
      <a slot="disclaimer-item" href="https://google.ch">
        Johannes
      </a>
      <a slot="disclaimer-item" href="https://digitec.ch">
        Benjamin
      </a>
      <a
        slot="language-item"
        class="m-footer-small__link--active"
        href="https://google.ch"
      >
        DE
      </a>
      <a
        slot="language-item"
        href="https://digitec.ch"
      >
        FR
      </a>
      <a
        slot="language-item"
        href="https://digitec.ch"
      >
        IT
      </a>
      <a
        slot="language-item"
        href="https://digitec.ch"
      >
        EN
      </a>
      <span slot="copyright">© 2019 AXA Insurance Ltd.</span>
    </axa-footer-small>`
  );
