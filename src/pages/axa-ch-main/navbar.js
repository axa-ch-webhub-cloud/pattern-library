/* eslint-disable import/no-extraneous-dependencies */
import { html, svg } from 'lit-html';

import axaLogo from '@axa-ch/materials/images/axa-logo.svg';

const logo = svg([axaLogo]);

const style = html`
  <style>
    .pages-axa-main-page__navbar .pages-axa-main-page__logo svg {
      width: 53px;
    }

    .pages-axa-main-page__navbar .pages-axa-main-page__navbar-row {
      border: 1px #333 solid;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .pages-axa-main-page__navbar {
      display: flex;
      flex-direction: column;
    }

    .pages-axa-main-page__navbar-navigation-items {
      display: flex;
      flex-direction: row;
      list-style-type: none;
    }

    .pages-axa-main-page__navbar-navigation-items li {
      padding: 5px 15px 5px 15px;
    }

    .pages-axa-main-page__navbar-top-right {
      display: flex;
      flex-direction: row;
    }

    axa-dropdown {
      width: 90px;
    }
  </style>
`;

export default html`
  ${style}

  <nav class="pages-axa-main-page__navbar">
    <div class="pages-axa-main-page__navbar-row">
      <ul class="pages-axa-main-page__navbar-navigation-items">
        <li>Private Customers</li>
        <li>Corporate Customers</li>
        <li>About AXA</li>
      </ul>
      <div class="pages-axa-main-page__navbar-top-right">
        <axa-dropdown
          items='[
            {"name": "DE", "value": "DE" },
            {"name": "FR", "value": "FR" },
            {"name": "IT", "value": "IT" },
            {"name": "EN", "value": "EN" }
          ]'
        ></axa-dropdown>
        <axa-button>Login</axa-button>
      </div>
    </div>

    <div class="pages-axa-main-page__navbar-row">
      <div class="pages-axa-main-page__logo">
        ${logo}
      </div>
      <ul>
        <li>Offers</li>
        <li>Claims</li>
        <li>Customer Portal</li>
        <li>Contact & Services</li>
        <li>Blog</li>
      </ul>
      <axa-icon icon="search"></axa-icon>
    </div>
  </nav>
`;
