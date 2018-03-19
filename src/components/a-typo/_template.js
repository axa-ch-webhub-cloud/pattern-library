import html from 'nanohtml';

export default () => html`
  <article>
    <h1 class="a-typo__main-title--publico">Main Title</h1>
    <h2 class="a-typo__page-title--publico">Page Title</h2>
    <h3 class="a-typo__slice-title--publico">Slice Title</h3>
    <h4 class="a-typo__small-module-title--publico">Small Module Title</h4>

    <h1 class="a-typo__main-title">Main Title</h1>
    <h2 class="a-typo__page-title">Page Title</h2>
    <h3 class="a-typo__slice-title">Slice Title</h3>
    <h4 class="a-typo__small-module-title">Small Module Title</h4>
    <h5 class="a-typo__title">Title</h5>
    <h5 class="a-typo__title--semibold">Title (Semibold)</h5>

    <p>
      <span class="a-typo__item-highlight">Item Highlight</span>
      <br>
      <span class="a-typo__item-highlight--semibold">Item Highlight (Semibold)</span>
      <br>
      <span class="a-typo__item-highlight--regular">Item Highlight (Regular)</span>
    </p>

    <p class="a-typo__text">Text</p>
    <p class="a-typo__text--semibold">Text (Semibold)</p>
    <p class="a-typo__text--bold">Text (Bold)</p>
    <p class="a-typo__text-longer">Text Longer</p>
    <p class="a-typo__text-longer--bold">Text Longer (Bold)</p>
    <p class="a-typo__secondary-text">Secondary Text</p>
    <p class="a-typo__secondary-text--semibold">Secondary Text (Semibold)</p>
    <p class="a-typo__secondary-text--bold">Secondary Text (Bold)</p>

    <p>
      <span class="a-typo__tag">Tag</span>
      <br>
      <span class="a-typo__tag--semibold">Tag (Semibold)</span>
      <br>
      <span class="a-typo__tag--bold">Tag (Bold)</span>
    </p>

    <p>
      <span class="a-typo__legals">Legals</span>
      <br>
      <span class="a-typo__legals--semibold">Legals (Semibold)</span>
    </p>
  </article>
`;
