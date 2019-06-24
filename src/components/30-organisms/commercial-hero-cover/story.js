/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Organisms/Commercial hero cover', module)
  .addDecorator(withMarkdown(Readme))
  .add(
    'Commercial hero cover - default',
    () => `
    <axa-commercial-hero-cover>
      <section class="o-commercial-hero-cover__section js-commercial-hero-cover__first">
        <h2 class="o-commercial-hero-cover__subtitle">Car Insurance</h2>
        <h1 class="o-commercial-hero-cover__title">Drive with peace of mind</h1>
        <p class="o-commercial-hero-cover__text">Whether you need to insure your first car or renew your existing car
          insurance, AXA can provide a range of car insurance policies to suit your requirements and offer great product
          benefits at a price you can afford
        </p>
        <axa-button tag="a" href="http://www.google.com" class="o-commercial-hero-cover__button" color="blue" motion size="lg">Get a
          quote
        </axa-button>
      </section>

      <section class="o-commercial-hero-cover__section js-commercial-hero-cover__second">
        <p class="o-commercial-hero-cover__text">This area can be used to place custom teasers (if agreed on by design team).</p>
      </section>
    </axa-commercial-hero-cover>
  `
  );
