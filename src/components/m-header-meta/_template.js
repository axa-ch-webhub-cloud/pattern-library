import bel from 'bel';

export default (props, childrenFragment) => bel`
  <div class="m-header-meta__box">
    <div class="m-header-meta__row">
      ${childrenFragment}
    </div>
  </div>
`;
