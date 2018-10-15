import html from 'nanohtml';
import classnames from 'classnames';

export default ({ classes, items, first, last }) => html`
  <nav class="o-pagination ${classes}">
    ${(first && html`
      <a class="o-pagination__first" href=${''} />&lt;</a>
    `) || ''}
    
    ${Array.isArray(items) && items.map(({ href, active }, index) => html`
      <a class="o-pagination__link ${classnames({
        'o-pagination__link--active': active,
      })}" href=${href}/>${index + 1}</a>
    `)}
    
    ${(last && html`
      <a class="o-pagination__last" href=${''} />&gt;</a>
    `) || ''}
  </nav>
`;
