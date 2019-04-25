/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Atoms/Button Link', module)
  .addDecorator(withMarkdown(Readme))
  .add('Button-Link - click event', () => {
    const btn = document.createElement('axa-button-link');
    let counter = 0;
    btn.innerHTML = `You clicked me: ${counter} mal, btw my event name is click`;
    btn.addEventListener('click', e => {
      e.preventDefault();
      counter += 1;
      btn.innerHTML = `You clicked me: ${counter} times, btw my event name is click`;
    });

    return btn;
  })
  .add('Button Link - external', () => '<axa-button-link href="https://axa.ch/" external>I will send you in a new tab to external site</axa-button-link>')
  .add('Button Link - default', () => '<axa-button-link href="https://axa.ch/">I&apos;m a primary button</axa-button-link>')
  .add('Button Link - variant: red', () => '<axa-button-link variant="red">I&apos;m a primary red button link</axa-button-link>')
  .add('Button Link - variant: secondary', () => '<axa-button-link variant="secondary">I&apos;m a secondary button link</axa-button-link>')
  .add(
    'Button Link - variant: inverted',
    () => `
    <div style="background-color: #3032c1; color:#3032c1; width: 500px; height: 100px; padding-top: 30px; padding-bottom: 30px">
      <axa-button-link variant='inverted'>I&apos;m a inverted button</axa-button-link>
    </div>`
  )
  .add('Button Link - disabled', () => '<axa-button-link disabled>I&apos;m a button</axa-button-link>')
  .add(
    'Button Link - size',
    () => `
    <div>
      <axa-button-link>I&apos;m size medium(default)</axa-button-link>
      <axa-button-link large>I&apos;m large</axa-button-link>
    </div>`
  )
  .add(
    'Button Link - motion',
    () => `
    <div>
      <div>
        <axa-button-link motionoff>I&apos;m default primary btn without motion</axa-button-link>
        <axa-button-link>I&apos;m primary btn with motion</axa-button-link>
      </div>
      <div>
        <axa-button-link motionoff variant="red">I&apos;m primary red btn without motion</axa-button-link>
        <axa-button-link variant="red">I&apos;m primary red btn with motion</axa-button-link>
      </div>
      <div>
        <axa-button-link motionoff variant="secondary">I&apos;m primary btn without motion</axa-button-link>
        <axa-button-link variant="secondary">I&apos;m secondary btn with motion</axa-button-link>
      </div>
    </div>`
  )
  .add(
    'Button Link - icon',
    () => `
    <div>
      <axa-button-link icon="arrow-right">I&apos;m default btn with a icon</axa-button-link>
      <axa-button-link variant="secondary" icon="arrow-right">I&apos;m variant: secondary btn with a icon</axa-button-link>
      <axa-button-link variant="red" icon="arrow-right">I&apos;m variant: red btn with a icon</axa-button-link>
    </div>`
  );


