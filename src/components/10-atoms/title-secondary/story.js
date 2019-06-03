/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Atoms/Title secondary', module)
  .addDecorator(withMarkdown(Readme))
  .add(
    'Title secondary - Size 1',
    () => '<axa-title-secondary>Title secondary 1</axa-title-secondary>'
  )
  .add(
    'Title secondary - Size 2',
    () =>
      '<axa-title-secondary variant="size-2">Title secondary 2</axa-title-secondary>'
  )
  .add(
    'Title secondary - Size 3',
    () =>
      '<axa-title-secondary variant="size-3">Title secondary 3</axa-title-secondary>'
  )
  .add(
    'Title secondary - Size 4',
    () =>
      '<axa-title-secondary variant="size-4">Title secondary 4</axa-title-secondary>'
  );
