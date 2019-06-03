/* global document */
// TODO fix that stuff
/* eslint-disable import/no-extraneous-dependencies */
import {
  FacebookSvg,
  InstagramSvg,
  TwitterSvg,
  XingSvg,
  YoutubeSvg,
  LinkedinSvg,
  CaretSvg,
} from '@axa-ch/materials';
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import withBodyReset from '../../../../.storybook/addons/reset-body';
import Readme from './README.md';

// todo delete the following line
import { svg } from 'lit-element';

storiesOf('Organisms/Footer', module)
  .addDecorator(withMarkdown(Readme))
  .addDecorator(withBodyReset())
  .add(
    'Footer',
    () =>
      `
      <axa-footer>
        <footer class="o-footer">
          <axa-container>	
            <div class="o-footer__content">
              <div class="o-footer__collection">
                <div class="o-footer__main">
                  <h1 class="o-footer__title-desktop">
                    axa & you
                  </h1>
                  <button
                    class="o-footer__accordion-button"
                  >
                    <h1 class="o-footer__title">
                      axa & you
                    </h1>
                    <span
                      class="o-footer__accordion-button-caret o-footer__accordion-button-caret--open"
                    >
                      ${svg([CaretSvg || ''])}
                    </span>
                  </button>
                  <ul
                    class="o-footer__main-content-panel o-footer__main-content-panel--open"
                  >
                    <li
                      class="o-footer__main-content-panel-list-item"
                    >
                      <a
                        href="https://axa.ch/en/private-customers.html"
                        target="_blank"
                        >Contact</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="o-footer__main">
                  <h1 class="o-footer__title-desktop">
                    axa worldwide
                  </h1>
                  <button
                    class="o-footer__accordion-button"
                  >
                    <h1 class="o-footer__title">
                      axa worldwide
                    </h1>
                    <span
                      class="o-footer__accordion-button-caret o-footer__accordion-button-caret--open"
                    >
                      ${svg([CaretSvg || ''])}
                    </span>
                  </button>
                  <ul
                    class="o-footer__main-content-panel o-footer__main-content-panel--open"
                  >
                    <li
                      class="o-footer__main-content-panel-list-item"
                    >
                      <a
                        href="https://axa.ch/en/private-customers.html"
                        target="_blank"
                        >AXA worldwide</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="o-footer__social-media">
                <h1 class="o-footer__social-media-title">
                  stay in touch
                </h1>
                <ul class="o-footer__social-media-list">
                  <li>
                    <a
                      href="https://axa.ch/en/private-customers.html"
                      target="_blank"
                      >${svg([FacebookSvg || ''])}</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </axa-container>	
        </footer>
      </axa-footer>`
  );

// <style>

// axa-footer.o-footer {
//   // Avoid property being inherited
//   text-align: initial;

//   color: #fff;
//   background-color: $color-prim-blue-dark-indigo;

//   border-top: 1px solid rgba(255, 255, 255, 0.25);
// }

// axa-footer.o-footer__title {
//   @include typo(primary, default, medium);
//   margin: 0;
// }

// axa-footer.o-footer__social-media-title {
//   display: none;

//   text-transform: uppercase;
//   line-height: 1.5;
// }

// axa-footer.o-footer__social-media-list {
//   margin: 0;
//   text-indent: 0;
//   list-style-type: none;
//   padding: 0;

//   display: flex;
//   flex-wrap: wrap;
//   padding: 15px 20px;
// }

// axa-footer a.o-footer__social-media-list {
//   display: block;
//   padding: 10px;
// }

// axa-footer svg.o-footer__social-media-list {
//   color: #fff;
//   width: 25px;
//   height: 25px;
// }

// axa-footer .o-footer__title-desktop {
//   display: none;
// }

// axa-footer .o-footer__accordion-button {
//   @include typo(primary, default, medium);
//   display: flex;
//   justify-content: space-between;
//   color: $color-prim-white;
//   background-color: $color-prim-blue-dark-indigo;
//   padding: 20px 30px 20px 30px;
//   width: 100%;
//   text-align: left;

//   // Reset browser styles for button
//   border: none;
//   outline: 0;

//   border-bottom: 1px solid $color-prim-blue-st-tropaz;
//   text-transform: uppercase;
// }

// axa-footer svg.o-footer__accordion-button {
//   width: 10px;
//   height: 10px;
//   color: $color-prim-gray-dusty;
// }

// axa-footer.o-footer__accordion-button-caret {
//   transition: transform 0.2s ease-in-out;
//   transform: rotate(180deg);
// }

// axa-footer.o-footer__accordion-button-caret--open {
//   transform: rotate(0deg);
// }

// axa-footer.o-footer__main-content-panel {
//   margin: 0;
//   text-indent: 0;
//   list-style-type: none;
//   padding: 0;

//   max-height: 0;
//   transition: max-height 0.2s ease-out;

//   overflow: hidden;
//   background-color: $color-prim-blue-azure;
// }

// axa-footer.o-footer__main-content-panel--open {
//   max-height: 400px;
// }

// axa-footer.o-footer__main-content-panel-list-item {
//   @include typo(primary, xx-small, default);

//   padding: 0;
//   padding: 20px 30px;
//   border-bottom: 1px solid #00f;
// }

// axa-footer.o-footer__main-content-panel-list-item:last-child {
//   border-bottom: none;
// }

// axa-footer a.o-footer__main-content-panel-list-item {
//   text-decoration: none;
//   color: #fff;
// }

// </style>
