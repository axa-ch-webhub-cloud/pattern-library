import html from "nanohtml";

export default (props, childrenFragment) => html`
  <div class="m-header-main__box">${childrenFragment}</div>
`;
