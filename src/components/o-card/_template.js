import html from 'nanohtml';

export default (props, childrenFragment) => html`
  <article class="o-card__wrap">
    
    <div class="o-card__side o-card__side--1" name="side-1">
      ${childrenFragment.querySelector('[data-slot="side-1"]')}
    </div>

    <div class="o-card__side o-card__side--2" name="side-2">
      ${childrenFragment.querySelector('[data-slot="side-2"]')}
    </div>
  </div>
`;
