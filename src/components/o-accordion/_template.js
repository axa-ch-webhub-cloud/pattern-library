import html from "nanohtml";

export default ({ classes }, childrenFragment) => html`
  <article class=${classes}>${childrenFragment}</article>
`;
