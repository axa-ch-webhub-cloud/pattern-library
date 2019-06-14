/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import Readme from './README.md';

storiesOf('Molecules/Top content bar', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add(
    'Top content bar - Default with button',
    () =>
      `<axa-top-content-bar ctatext="See Blog article">
          Undefined flighting object detected in your region.
          People are paniking. Stay calm
       </axa-top-content-bar>`
  )
  .add(
    'Top content bar - Default no button',
    () =>
      `<axa-top-content-bar>
        Undefined flighting object detected in your region.
        People are paniking. Stay calm
       </axa-top-content-bar>`
  )
  .add(
    'Top content bar - Red with button',
    () =>
      `<axa-top-content-bar variant="warning" ctatext="Claim a damage">
          Did the hailstorm damage your car?
       </axa-top-content-bar>`
  )
  .add(
    'Top content bar - Red no button',
    () =>
      `<axa-top-content-bar variant="warning">
          Attention, tunderstorm is approaching near your house!
       </axa-top-content-bar>`
  )
  .add(
    'Top content bar - Default in text link',
    () =>
      `<axa-top-content-bar>
          Undefined flighting object detected in your region. <axa-link>Link to the blog article</axa-link>
       </axa-top-content-bar>`
  )
  .add(
    'Top content bar - Default Button-link',
    () =>
      `<axa-top-content-bar ctatext="See Blog article" href="http://www.axa.ch">
          Undefined flighting object detected in your region.
          People are paniking. Stay calm
       </axa-top-content-bar>`
  );
