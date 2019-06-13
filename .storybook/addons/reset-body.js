import addons, { makeDecorator } from '@storybook/addons'

export default makeDecorator({
  name: 'withBodyReset',
  parameterName: 'withbodyreset',
  wrapper: (storyFn, context, { options : html }) => {
    const channel = addons.getChannel();
    const template = storyFn(context);
    let generatedTemplate = template;

    // this is in case we pass a DOM element inside the story.
    if (typeof template === 'object' && template !== null && template instanceof HTMLElement) {
      const el = document.createElement('div');
      el.appendChild(template);
      generatedTemplate = el.innerHTML;
    }
    generatedTemplate += `
      <style>
        html, body {
          margin: 0;
          padding: 0;
        }
      </style>
    `
    return generatedTemplate;
  },
});
