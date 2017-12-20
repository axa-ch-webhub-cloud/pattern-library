import bel from 'bel';

export default (props, children) => bel`
  <div class="m-header-meta__box">
    <div class="m-header-meta__row">
      ${children}
    </div>
  </div>
`;
