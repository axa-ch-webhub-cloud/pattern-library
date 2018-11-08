import html from 'nanohtml';
import classnames from 'classnames';

export default ({
  caption,
  captionAlign,
  captionSide,
  headings,
  items,
  footers,
}, childrenFragment) => {
  const fragment = [];

  if (caption) {
    fragment.push(html`<caption class="o-table__caption ${classnames({
      [`u-align-${captionAlign}`]: captionAlign,
      [`o-table__caption--${captionSide}`]: captionSide,
    })}">${caption}</caption>`);
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
