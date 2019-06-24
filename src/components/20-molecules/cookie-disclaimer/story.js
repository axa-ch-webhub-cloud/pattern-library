/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import Readme from './README.md';
import withNoBorder from '../../../../.storybook/addons/no-border/no-border';

storiesOf('Molecules/Cookie disclaimer', module)
  .addDecorator(withNoBorder)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add(
    'Cookie disclaimer - Default',
    () => `<axa-cookie-disclaimer buttonname="Akzeptieren" title="This website uses cookies">
                  <p>Any Description for the cookie disclaimer</p>
                  <axa-link variant="arrowright-animated-white" href="https://axa.ch/de/informationen/datenschutz.html">
                    Data protection
                  </axa-link>
          </axa-cookie-disclaimer>`
  );
