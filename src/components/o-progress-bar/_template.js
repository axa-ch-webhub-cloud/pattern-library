import html from 'nanohtml';
// import isEmptyFragment from '../../js/is-empty-fragment';

const percentageSymbol = '%';
const closingIcon = 'cross-gap';

export default function ({
  classes,
  value = '0',
  max,
  showIcon,
  showPercentage,
}) {
  let percentage = 100;
  if (Math.sign(value) < 0 || Math.sign(max) < 0) {
    percentage = 0;
  } else if (value === 0) {
    percentage = 0;
  } else if (max >= value) {
    percentage = (value / max) * 100;
  } else if ((max === undefined || max === '') && value <= 1) {
    percentage = value * 100;
  }
  percentage = Math.floor(percentage);

  // ${showIcon ? 'o-progress-bar__has-icon' : ''} ${showPercentage ? 'o-progress-bar__has-percentage' : ''}
  return html`<article class="${classes}">
    <div class="o-progress-bar__container">
      ${showPercentage ? html`<p class="o-progress-bar__percentage"><span>${percentage}</span>${percentageSymbol}</p>` : ''}
      <progress class="o-progress-bar__progress" value="${value}" max="${max}"><span>${percentage}</span>${percentageSymbol}</progress>
      ${showIcon ? html`<button class="o-progress-bar__icon-button" type="button">
          <axa-icon class="o-progress-bar__closing-icon" icon-class="a-icon__svg--small" icon="${closingIcon}"></axa-icon>
        </button>` : ''}
    </div>
  </article>`;
}
