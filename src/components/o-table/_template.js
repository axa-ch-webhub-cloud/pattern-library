import html from 'nanohtml';

export default ({
  cap,
  capAlign,
  capSide,
  headings,
  items,
  footers,
}, childrenFragment) => {
  const fragment = [];

  if (cap) {
    const capAttrs = {
      ...(capAlign && { align: capAlign }),
      ...(capSide && { side: capSide }),
    };

    fragment.push(html`<caption is="axa-caption" ${capAttrs}>${cap}</caption>`);
  }

  if (headings) {
    fragment.push(html`<thead is="axa-thead" items=${headings}></thead>`);
  }

  if (footers) {
    fragment.push(html`<tfoot is="axa-tfoot" items=${footers}></tfoot>`);
  }

  if (items) {
    fragment.push(html`<tbody is="axa-tbody" items=${items}></tbody>`);
  }

  if (fragment.length) {
    fragment.push(childrenFragment);

    return fragment;
  }

  return childrenFragment;
};
