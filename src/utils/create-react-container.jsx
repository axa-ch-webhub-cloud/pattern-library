// eslint-disable-next-line import/no-extraneous-dependencies
import { createRoot } from 'react-dom/client';

export function createReactContainer(
  child,
  container = document.createElement('div')
) {
  const root = createRoot(container);
  root.render(child);

  return container;
}
