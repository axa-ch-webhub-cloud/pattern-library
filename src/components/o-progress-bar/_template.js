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
  if (value < 0 || max < 0) {
    console.log('negative');// TODO Errorhandling
    // TODO set value to 0
  } else if (value > max) {
    console.log('value > max');// TODO Errorhandling
  }

  // console.log(childrenFragment.childNodes[0].nodeValue > -1);

  // the percentage shouldn't be round up cause then the progressbar could show 100% even if the task is not finished
  let percentage = 100;
  if ((max === undefined || max === '') && value <= 1) {
    percentage = value * 100;
  } else if (value === 0) {
    percentage = 0;
  } else if (max >= value) {
    percentage = (value / max) * 100;
  }
  percentage = Math.floor(percentage);

  return html`<article class="${classes}">
    <div class="o-progress-bar__container">
      ${showPercentage ? html`<p class="o-progress-bar__percentage"><span>${percentage}</span>${percentageSymbol}</p>` : ''}
      ${console.log(value, max, showIcon, showPercentage)}
      <progress class="o-progress-bar__progress" value="${value}" max="${max}"><span>${percentage}</span>${percentageSymbol}</progress>
      ${showIcon ? html`<button class="o-progress-bar__icon-button" type="button">
          <axa-icon class="o-progress-bar__closing-icon" icon-class="a-icon__svg--small" icon="${closingIcon}"></axa-icon>
        </button>` : ''}
    </div>
  </article>`;
}
