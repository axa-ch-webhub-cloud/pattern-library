import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import axaLogo from '@axa-ch/materials/images/axa-logo.svg';

const logo = unsafeHTML(axaLogo);

const style = html`
  <style>
    .pages-axa-main-page__navbar {
      display: flex;
      flex-direction: column;

      padding: 10px;
      border-bottom: 2px rgb(229, 229, 229) solid;
    }

    .pages-axa-main-page__navbar .pages-axa-main-page__logo svg {
      width: 53px;
    }

    .pages-axa-main-page__navbar .pages-axa-main-page__navbar-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .pages-axa-main-page__navbar-navigation-items {
      display: flex;
      flex-direction: row;
      list-style-type: none;
    }

    .pages-axa-main-page__navbar-navigation-items li {
      padding: 5px 15px 5px 15px;
    }

    .pages-axa-main-page__navbar-navigation-items li:first-child {
      padding-left: 0px;
    }

    .pages-axa-main-page__navbar-right {
      display: flex;
      flex-direction: row;
    }

    axa-dropdown {
      width: 90px;
    }

    .pages-axa-main-page__navbar-navigation-search-icon::before {
      content: '|';
      font-size: 25px;
      padding-right: 10px;
    }
  </style>
`;

export default html`
  ${style}

  <nav class="pages-axa-main-page__navbar">
    <axa-container>
      <div class="pages-axa-main-page__navbar-row">
        <ul class="pages-axa-main-page__navbar-navigation-items">
          <li><axa-link href="#">Private Customers</axa-link></li>
          <li><axa-link href="#">Corporate Customers</axa-link></li>
          <li><axa-link href="#">About AXA</axa-link></li>
        </ul>
        <div class="pages-axa-main-page__navbar-right">
          <axa-dropdown
            items='[
            {"name": "DE", "value": "DE" },
            {"name": "FR", "value": "FR" },
            {"name": "IT", "value": "IT" },
            {"name": "EN", "value": "EN" }
          ]'
            value="EN"
          ></axa-dropdown>
          <axa-button>Login</axa-button>
        </div>
      </div>

      <div class="pages-axa-main-page__navbar-row">
        <div class="pages-axa-main-page__logo">${logo}</div>
        <div class="pages-axa-main-page__navbar-right">
          <ul class="pages-axa-main-page__navbar-navigation-items">
            <li><axa-link href="#">Offers</axa-link></li>
            <li><axa-link href="#">Claims</axa-link></li>
            <li><axa-link href="#">Customer Portal</axa-link></li>
            <li><axa-link href="#">Contact & Services</axa-link></li>
            <li><axa-link href="#">Blog</axa-link></li>
          </ul>
          <axa-icon
            icon="search"
            class="pages-axa-main-page__navbar-navigation-search-icon"
            size="auto"
          ></axa-icon>
        </div>
      </div>
    </axa-container>
  </nav>
`;
