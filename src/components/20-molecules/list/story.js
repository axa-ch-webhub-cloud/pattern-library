import { select, text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';

export default {
  title: 'Components',
  decorators: [withKnobs],
};

export const List = () => {
  const variant = select('variant', {
    '[default]': '',
    ordered: 'ordered',
    unstyled: 'unstyled',
    icon: 'icon',
  });
  const icon = text(
    'icon',
    '<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.79508 10.8749L1.62508 6.70492L0.205078 8.11492L5.79508 13.7049L17.7951 1.70492L16.3851 0.294922L5.79508 10.8749Z" fill="green"/></svg>'
  );

  const wrapper = document.createElement('div');
  const template = html`
    <axa-list variant="${variant}" icon="${icon}">
      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
      <li>Aliquam tincidunt mauris eu risus.</li>
      <li>Vestibulum auctor dapibus neque.</li>
      <li>Nunc dignissim risus id metus.</li>
      <li>Cras ornare tristique elit.</li>
      <li>Vivamus vestibulum ntulla nec ante.</li>
      <li>Praesent placerat risus quis eros.</li>
      <li>Fusce pellentesque suscipit nibh.</li>
      <li>Integer vitae libero ac risus egestas placerat.</li>
      <li>Vestibulum commodo felis quis tortor.</li>
      <li>Ut aliquam sollicitudin leo.</li>
      <li>Cras iaculis ultricies nulla.</li>
      <li>Donec quis dui at dolor tempor interdum.</li>
    </axa-list>
  `;

  render(template, wrapper);
  return wrapper;
};

List.parameters = {
  knobs: {
    escapeHTML: false,
  },
};
