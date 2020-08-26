/* global document */
import { storiesOf } from '@storybook/html';
import Changelog from './CHANGELOG.md';
import './index';

storiesOf('Examples/Footer/Pure HTML', module)
  .addParameters({
    layout: 'fullscreen',
    changelog: Changelog,
  })

  .add('Callbacks', () => {
    const wrapper = document.createElement('div');

    const footerMarkup = `
    <axa-footer clickevents>
      <h2 slot="column-title">axa & you</h2>
      <a slot="column-item" href="https://axa.ch/en/private-customers.html" target="_blank">Contact</a>
      <a slot="column-item" href="https://axa.ch/en/private-customers/claims/everything-about-claiming/file-claim.html" target="_blank">Report a claim</a>
      <a slot="column-item" href="https://axa.ch/en/information/broker-services.html" target="_blank">Broker</a>
      <a slot="column-item" href="https://axa.ch/en/about-axa/jobs-career/job-vacancies/job-vacancies.html" target="_blank">Job vacancies</a>
      <a slot="column-item" href="https://myaxa.axa.ch/myaxa" target="_blank">MyAXA</a>
      <a slot="column-item" href="https://axa.ch/en/about-axa/reviews.html" target="_blank">Customer reviews</a>
      <a slot="column-item" href="https://axa.ch/content/garagen/en/garage-portal.html" target="_blank">Garage Portal</a>
      <h2 slot="column-title">axa worldwide</h2>
      <a slot="column-item" href="http://www.axa.com" target="_blank">AXA worldwide</a>
      <h2 slot="social-title">stay in touch</h2>
      <a slot="social-item" href="https://www.facebook.com/axach/" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><path d="M8.865 9.043H6.213v3.473h2.652v10.42h4.452v-10.42h3.274l.31-3.473h-3.584V7.634c0-.832.164-1.152.982-1.152h2.57V2.096h-3.388c-3.274 0-4.616 1.377-4.616 4.002v2.945z" fill="#FFFFFF"/></svg>
      </a>
      <a slot="social-item" href="https://www.instagram.com/axaswitzerland/" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><g transform="translate(1 1)" fill="#FFFFFF"><circle cx="10.931" cy="10.931" r="3.644"/><path d="M21.794 6.428a6.033 6.033 0 0 0-6.36-6.36H6.428a6.033 6.033 0 0 0-6.36 6.36v9.006a6.033 6.033 0 0 0 6.36 6.36h9.006a6.033 6.033 0 0 0 6.36-6.36v-4.503c0-2.973.051-3.334 0-4.503zm-16.81 4.503a5.947 5.947 0 1 1 11.894 0 5.947 5.947 0 0 1-11.894 0zm10.91-5.653a1.306 1.306 0 1 1 2.414-1 1.306 1.306 0 0 1-2.413 1z"/></g></svg></a>
      <a slot="social-item" href="https://twitter.com/axa_schweiz" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><path d="M22.748 5.267a8.861 8.861 0 0 1-2.548.705 4.449 4.449 0 0 0 1.962-2.468 8.88 8.88 0 0 1-2.817 1.074 4.44 4.44 0 0 0-5.356-.897 4.452 4.452 0 0 0-2.225 4.96 12.604 12.604 0 0 1-9.138-4.65 4.453 4.453 0 0 0 1.375 5.944 4.422 4.422 0 0 1-2.013-.554 4.448 4.448 0 0 0 3.555 4.416 4.438 4.438 0 0 1-1.995.15 4.444 4.444 0 0 0 4.142 3.09 8.912 8.912 0 0 1-6.574 1.847 12.612 12.612 0 0 0 13.16.28 12.648 12.648 0 0 0 6.258-11.597 9.045 9.045 0 0 0 2.213-2.3z" fill="#FFFFFF"/></svg>
      </a>
      <a slot="social-item" href="https://www.xing.com/companies/AXAWINTERTHUR" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><path d="M17.638 2.04c-.43 0-.619.268-.768.545 0 0-6.206 10.933-6.385 11.29l4.07 7.46c.14.258.36.546.798.546h2.874c.18 0 .309-.07.379-.179.08-.129.08-.287 0-.446l-4.06-7.39L20.92 2.664a.474.474 0 0 0 .01-.447.458.458 0 0 0-.389-.178M5.546 5.958c-.17 0-.319.05-.389.179-.08.129-.07.278.02.436l1.936 3.373-3.053 5.358a.576.576 0 0 0 0 .446c.07.119.2.179.369.179h2.883c.43 0 .639-.278.788-.546 0 0 2.983-5.258 3.103-5.456L9.228 6.504c-.14-.258-.36-.546-.808-.546" fill="#FFFFFF"/></svg>
      </a>
      <a slot="social-item" href="https://www.youtube.com/axaschweiz" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><path d="M18.797 4.185c-3.25-.216-10.469-.216-13.719 0-3.516.23-3.922 2.323-3.953 7.815-.031 5.492.438 7.585 3.953 7.815 3.234.216 10.469.216 13.719 0 3.515-.23 3.922-2.323 3.953-7.815.031-5.492-.438-7.585-3.953-7.815zM9.234 15.554V8.446L16.438 12l-7.204 3.554z" fill="#FFFFFF"/></svg>
      </a>
      <a slot="social-item" href="https://www.linkedin.com/company/axa/" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><path d="M6.519 4.183A2.146 2.146 0 0 1 4.354 6.3a2.147 2.147 0 0 1-2.121-2.16A2.147 2.147 0 0 1 4.376 2a2.14 2.14 0 0 1 1.527.641c.403.41.625.966.616 1.542zm0 3.9H2.216V22h4.32L6.519 8.083zm6.878 0h-4.27V22h4.287v-7.3c0-4.05 5.2-4.383 5.2 0V22h4.303v-8.817c0-6.833-7.692-6.666-9.503-3.216l-.017-1.884z" fill="#FFFFFF"/></svg>
      </a>
    </axa-footer>`;

    wrapper.innerHTML = footerMarkup;

    const lastClicked = document.createElement('span');
    lastClicked.id = 'clicked-link';
    lastClicked.innerText = 'Last clicked link: -';
    wrapper.appendChild(lastClicked);

    document.addEventListener('axa-footer-click', ev => {
      const span = document.getElementById(lastClicked.id);
      span.innerText = `Last clicked link: ${ev.detail}`;
    });

    return wrapper;
  })
  .add('Without content', () => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `<axa-text>This demo is just for UI Testing. It shows the footer without content. Do not use it like this!</axa-text><axa-footer></axa-footer>`;
    return wrapper;
  });
