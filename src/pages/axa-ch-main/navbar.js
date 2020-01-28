/* eslint-disable import/no-extraneous-dependencies */
import { html, svg } from 'lit-html';

import axaLogo from '@axa-ch/materials/images/axa-logo.svg';

const logo = svg([axaLogo]);

export default html`
  <style>
    nav .pages-axa-main-page__logo svg {
      width: 53px;
    }
  </style>

  <nav>
    <ul>
      <li>Private Customers</li>
      <li>Corporate Customers</li>
      <li>About AXA</li>
    </ul>
    <axa-dropdown
      items='[
      {"name": "DE", "value": "DE" },
      {"name": "FR", "value": "FR" },
      {"name": "IT", "value": "IT" },
      {"name": "EN", "value": "EN" }
   ]'
    ></axa-dropdown>
    <axa-button>Login</axa-button>
    <div class="pages-axa-main-page__logo">
      ${logo}
    </div>
  </nav>
`;
