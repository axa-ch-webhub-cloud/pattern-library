import html from 'nanohtml';

export default ({ classes, buttonName }, childrenFragment) => html`
  <article class=${classes}>
    <axa-container>
      ${childrenFragment}
      <axa-button>${buttonName}</axa-button>
    </axa-container>
  </article>
`;
