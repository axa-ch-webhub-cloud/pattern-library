/* global document */
import { storiesOf } from '@storybook/html';
import withNoBorder from '../../../../.storybook/addons/no-border';
import Changelog from './CHANGELOG.md';
import './index';
import Readme from './README.md';

storiesOf('Examples/Cookie Disclaimer/Pure HTML', module)
  .addDecorator(story => withNoBorder(story))
  .addDecorator(withNoBorder)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
  })
  .add('Dynamic (Story is invisible after click on ok button)', () => {
    const cookieDisclaimer = document.createElement('axa-cookie-disclaimer');
    cookieDisclaimer.setAttribute('buttonname', 'Akzeptieren');
    cookieDisclaimer.setAttribute('title', 'This Website uses cookies');
    cookieDisclaimer.innerHTML = `
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        At vero eos et accusam et justo duo dolores et ea rebum.
        <axa-link variant="arrowright-animated-white" href="https://axa.ch/de/informationen/datenschutz.html">Data protection</axa-link>
      </p>
    `;

    const div = document.createElement('div');
    const divWrapper = document.createElement('div');
    div.classList.add('js-only-for-demo-local-storage');
    divWrapper.appendChild(div);
    divWrapper.appendChild(cookieDisclaimer);

    setTimeout(() => {
      const time = window.localStorage.getItem(
        'axa-ch-cookie-disclaimer-accepted'
      );

      document.querySelector('.js-only-for-demo-local-storage').innerHTML = time
        ? `Accepted the disclaimer at: <b>
          ${new Date(+time).toLocaleString()}
          </b>. Please delete local storage entry or all cache data from the browser in order to see it again
          ->
          <axa-button onclick="localStorage.removeItem('axa-ch-cookie-disclaimer-accepted'); location.href=location.href;">
            DELETE HERE
          </axa-button>
          `
        : '';
    }, 300);

    return divWrapper;
  });
