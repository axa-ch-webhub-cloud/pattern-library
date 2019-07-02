/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import Readme from './README.md';

storiesOf('Atoms/Input text', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Input text - default', () => '<axa-input-text></axa-input-text>')
  .add(
    'Input text - label',
    () => '<axa-input-text label="Field Label"></axa-input-text>'
  )
  .add(
    'Input text - placeholder',
    () => '<axa-input-text placeholder="Pre-filled content"></axa-input-text>'
  )
  .add(
    'Input text - checkMark',
    () =>
      '<axa-input-text checkmark placeholder="Pre-filled content"></axa-input-text>'
  )
  .add(
    'Input text - type',
    () => `<div>
          <axa-input-text label="Text"></axa-input-text>
          <axa-input-text type="email" label="Email"></axa-input-text>
          <axa-input-text type="password" label="Password"></axa-input-text>
        </div>`
  )
  .add(
    'Input text - value',
    () => '<axa-input-text value="Example Value"></axa-input-text>'
  )
  .add(
    'Input text - disabled',
    () => '<axa-input-text disabled></axa-input-text>'
  )
  .add(
    'Input text - required',
    () => '<axa-input-text required label="Field Label"></axa-input-text>'
  )
  .add(
    'Input text - invalid',
    () => '<axa-input-text invalid></axa-input-text>'
  )
  .add(
    'Input text - Error Message',
    () =>
      '<axa-input-text required invalid error="Error Message"></axa-input-text>'
  );
