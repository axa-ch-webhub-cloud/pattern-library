import html from 'nanohtml';
import isEmptyFragment from '../../js/is-empty-fragment';

const percentageSymbol = '%';
export default function ({
  classes,
  value = '0',
  max = '100',
  showIcon,
  showPercentage,
}, childrenFragment) {
  const noChildren = isEmptyFragment(childrenFragment);
  console.log(noChildren);
  return html`<div class=${classes}>
    ${console.log(value, max, showIcon, showPercentage)}
    <progress value="${value}" max="${max}"><span>looool</span>${percentageSymbol}</progress>
    <axa-icon icon="cross-gap"></axa-icon>
  </div>`;
}
