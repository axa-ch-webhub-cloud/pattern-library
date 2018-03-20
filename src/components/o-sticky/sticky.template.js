import html from 'nanohtml/lib/browser';

export default function sticky(props, childrenFragment) {
  return [
    html`<div class="o-sticky__placeholder js-sticky__placeholder"></div>`,
    html`<div class="o-sticky__box js-sticky__box">${childrenFragment}</div>`,
  ];
}
