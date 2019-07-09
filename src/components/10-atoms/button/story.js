/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import Readme from './README.md';

storiesOf('Atoms/Button', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Button - default', () => '<axa-button>Default</axa-button>')

  /* Variants */
  .add(
    'Button - variant: red',
    () => '<axa-button variant="red">Red</axa-button>'
  )
  .add(
    'Button - variant: secondary',
    () => '<axa-button variant="secondary">Secondary</axa-button>'
  )
  .add(
    'Button - variant: inverted',
    () => `
    <div style="background-color: #00008f; width: 500px; height: 100px; padding-top: 30px; padding-bottom: 30px">
      <axa-button variant="inverted">Inverted</axa-button>
      <axa-button variant="inverted-blue-ocean">inverted-blue-ocean</axa-button>
      <axa-button variant="inverted-red-tosca">inverted-red-tosca</axa-button>
      <axa-button variant="inverted-purple-logan">inverted-purple-logan</axa-button>
      <axa-button variant="inverted-green-viridian">inverted-green-viridian</axa-button>
      <axa-button variant="inverted-blue-teal">inverted-blue-teal</axa-button>
    </div>`
  )

  /* Disabled */
  .add('Button - disabled', () => '<axa-button disabled>Disabled</axa-button>')

  /* Type */
  .add(
    'Button - type',
    () => `
    <div>
      <axa-button>Button</axa-button>
      <axa-button type="submit">Submit</axa-button>
      <axa-button type="reset">Reset</axa-button>
    </div>`
  )

  /* Large */
  .add(
    'Button - size',
    () =>
      `<div>
        <axa-button size="small">Small</axa-button>
        <axa-button>Default(Medium)</axa-button>
        <axa-button size="large">Large</axa-button>
      </div>`
  )

  /* MotionOff */
  .add(
    'Button - motionOff',
    () => `
    <div>
        <axa-button motionoff>MotionOff</axa-button>
        <axa-button motionoff variant="red">MotionOff + Red</axa-button>
        <axa-button motionoff variant="secondary">MotionOff + Secondary</axa-button>
        <axa-button motionoff variant="inverted">MotionOff + Inverted</axa-button>
      </div>
    </div>`
  )

  /* Icon */
  .add('Button - icon', () => `<axa-button icon="download">Icon</axa-button>`)

  /* Arrow */
  .add(
    'Button - icon(arrow-right)',
    () => `<axa-button icon="arrow-right">Icon</axa-button>`
  );
