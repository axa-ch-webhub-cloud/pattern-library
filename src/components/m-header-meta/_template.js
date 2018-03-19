import html from 'nanohtml';

export default (props, childrenFragment) => html`
  <div class="m-header-meta__box">
    <div class="m-header-meta__row">
      ${childrenFragment}
    </div>
  </div>
`;
