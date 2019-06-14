/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import Readme from './README.md';

storiesOf('Atoms/Title secondary', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add(
    'Title secondary',
    () => `
      <axa-title-secondary>Title secondary 1</axa-title-secondary>
      <axa-title-secondary variant="size-2">Title secondary 2</axa-title-secondary>
      <axa-title-secondary variant="size-3">Title secondary 3</axa-title-secondary>
      <axa-title-secondary variant="size-4">Title secondary 4</axa-title-secondary>
      <axa-title-secondary variant="size-5">Title secondary 5</axa-title-secondary>
      <axa-title-secondary variant="size-6">Title secondary 6</axa-title-secondary>
    `
  );
