import { configure } from '@storybook/html';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context('..', true, /_demo/));
}

configure(loadStories, module);
