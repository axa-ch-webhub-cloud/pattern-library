import { render } from 'lit';

export const renderLitContainer = (
  template,
  container = document.createElement('div')
) => {
  render(template, container);

  return container;
};
