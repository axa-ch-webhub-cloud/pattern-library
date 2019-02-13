import html from "nanohtml";

export default function(props, childrenFragment) {
  return html`
    <div class="m-footer-sub__box">
      <div class="m-footer-sub__row">${childrenFragment}</div>
    </div>
  `;
}
