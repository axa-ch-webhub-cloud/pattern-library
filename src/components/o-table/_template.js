import html from 'nanohtml';
import classnames from 'classnames';

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
    fragment.push(html`<cap class="o-table__cap ${classnames({
      [`u-align-${capAlign}`]: capAlign,
      [`o-table__cap--${capSide}`]: capSide,
    })}">${cap}</cap>`);
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
