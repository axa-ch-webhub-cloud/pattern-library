/* global document */
import { storiesOf } from '@storybook/html';
import './index';

storiesOf('Button', module)
  .add('Button - click event', () => {
    const btn = document.createElement('axa-button');
    btn.innerHTML = 'Click me, my event name is click';
    btn.addEventListener('click', () => {
      /* eslint-disable no-alert */
      window.alert('yooyo');
      /* eslint-enable no-alert */
    });

    return btn;
  })
  .add('Button - default (primary)', () => '<axa-button>Im a primary button</axa-button>')
  .add('Button - cta (primary)', () => '<axa-button cta>Im a primary cta button</axa-button>')
  .add('Button - secondary', () => '<axa-button secondary>Im a secondary button</axa-button>')
  .add(
    'Button - secondary and inverted',
    () => `
    <div style="background-color: #3032c1; color:#3032c1; width: 500px; height: 100px; padding-top: 30px; padding-bottom: 30px">
      <axa-button secondary inverted>Im a secondary inverted button</axa-button>
    </div>`
  )
  .add('Button - disabled', () => '<axa-button disabled>Im a button</axa-button>')
  .add(
    'Button - type',
    () => `
    <div>
      <axa-button>I&apos;m type button(default)</axa-button>
      <axa-button type="submit">I&apos;m type submit</axa-button>
      <axa-button type="reset">I&apos;m type reset</axa-button>
    </div>`
  )
  .add(
    'Button - size',
    () => `
    <div>
      <axa-button>I&apos;m size medium(default)</axa-button>
      <axa-button large>I&apos;m large</axa-button>
    </div>`
  )
  .add(
    'Button - motion',
    () => `
    <div>
      <axa-button>I&apos;m primary btn without motion</axa-button>
      <axa-button motion>I&apos;m primary btn with motion</axa-button>
      <axa-button cta>I&apos;m primary cta btn without motion</axa-button>
      <axa-button cta motion>I&apos;m primary cta btn with motion</axa-button>
      <axa-button secondary>I&apos;m primary btn without motion</axa-button>
      <axa-button secondary motion>I&apos;m secondary btn with motion</axa-button>
    </div>`
  )
  .add(
    'Button - icon',
    () => `
    <div>
      <axa-button icon="arrow-right">I&apos;m primary btn with a icon</axa-button>
      <axa-button secondary icon="arrow-right">I&apos;m primary btn with a icon</axa-button>
    </div>`
  );
