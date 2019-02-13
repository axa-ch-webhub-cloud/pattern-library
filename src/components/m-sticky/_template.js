import html from "nanohtml";

export default function sticky(props, childrenFragment) {
  return [
    html`
      <div class="m-sticky__placeholder js-sticky__placeholder"></div>
    `,
    html`
      <div class="m-sticky__box js-sticky__box">${childrenFragment}</div>
    `
  ];
}
