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
        html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed,
        figure, figcaption, footer, header, hgroup,
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
        }
      </style>
    `
    return generatedTemplate;
  },
});
