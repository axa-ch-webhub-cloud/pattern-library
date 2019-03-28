/* global document */
import { storiesOf } from '@storybook/html';
import './index';

storiesOf('Atoms/Button', module)
  .add('Button - click event', () => {
    const btn = document.createElement('axa-button');
    let counter = 0;
    btn.innerText = `You clicked me: ${counter} mal, btw my event name is click`;
    btn.addEventListener('click', () => {
      counter += 1;
      btn.innerText = `You clicked me: ${counter} times, btw my event name is click`;
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
      <div>
        <axa-button motionoff>I&apos;m primary btn without motion</axa-button>
        <axa-button>I&apos;m primary btn with motion</axa-button>
      </div>
      <div>
        <axa-button motionoff cta>I&apos;m primary cta btn without motion</axa-button>
        <axa-button cta>I&apos;m primary cta btn with motion</axa-button>
      </div>
      <div>
        <axa-button motionoff secondary>I&apos;m primary btn without motion</axa-button>
        <axa-button secondary>I&apos;m secondary btn with motion</axa-button>
      </div>
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
