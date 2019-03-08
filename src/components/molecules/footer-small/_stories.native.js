/* global document */
import { storiesOf } from '@storybook/html';
import './index';

storiesOf('Footer Small', module)
  .add('Footer Small - click event', () => {
    const footer = document.createElement('axa-footer-small');
    // btn.innerHTML = 'Click me, my event name is click';
    // btn.addEventListener('click', () => {
    //   /* eslint-disable no-alert */
    //   window.alert('yooyo');
    //   /* eslint-enable no-alert */
    // });

    return footer;
  })
  .add('Footer Small', () => '<axa-footer-small></axa-footer-small>');
