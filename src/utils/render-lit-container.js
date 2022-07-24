import { render } from 'lit';

export function renderLitContainer(
  template,
  container = document.createElement('div')
) {
  render(template, container);
  return container;
}
