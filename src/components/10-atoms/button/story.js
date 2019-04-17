/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Atoms/Button', module)
  .addDecorator(withMarkdown(Readme))
  .add('Button - click event', () => {
    const btn = document.createElement('axa-button');
    let counter = 0;
    btn.innerHTML = `You clicked me: ${counter} mal, btw my event name is click`;
    btn.addEventListener('click', () => {
      counter += 1;
      btn.innerHTML = `You clicked me: ${counter} times, btw my event name is click`;
    });

    return btn;
  })
  .add('Button - default (primary)', () => '<axa-button>I&apos;m a primary button</axa-button>')
  .add('Button - red (primary)', () => '<axa-button red>I&apos;m a primary red button</axa-button>')
  .add('Button - secondary', () => '<axa-button secondary>I&apos;m a secondary button</axa-button>')
  .add(
    'Button - secondary and inverted',
    () => `
    <div style="background-color: #3032c1; color:#3032c1; width: 500px; height: 100px; padding-top: 30px; padding-bottom: 30px">
      <axa-button secondary inverted>I&apos;m a secondary inverted button</axa-button>
    </div>`
  )
  .add('Button - disabled', () => '<axa-button disabled>I&apos;m a button</axa-button>')
  .add(
    'Button - type',
    () => `
    <div>
      <axa-button>I&apos;m type button(default)</axa-button>
      <axa-button type="submit">I&apos;m type submit</axa-button>
      <axa-button type="reset">I&apos;m type reset</axa-button>
      <form>
       <axa-button type="submit">I&apos;m type submit in form should send me to Nirvana</axa-button>
      </form>
      <form>
        <input type="text" />
         <axa-button type="reset">I&apos;m type reset in form should reset Input</axa-button>
      </form>
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
        <axa-button motionoff red>I&apos;m primary red btn without motion</axa-button>
        <axa-button red>I&apos;m primary red btn with motion</axa-button>
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
      <axa-button red icon="arrow-right">I&apos;m primary btn with a icon</axa-button>
    </div>`
  );
