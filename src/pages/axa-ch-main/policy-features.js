/* eslint-disable import/no-extraneous-dependencies */
import { html } from 'lit-html';

import carIcon from '@axa-ch/materials/images/car.svg';
import chairIcon from '@axa-ch/materials/images/rocking-chair.svg';
import glassIcon from '@axa-ch/materials/images/broken-glass.svg';
import legalIcon from '@axa-ch/materials/images/legal.svg';
import handIcon from '@axa-ch/materials/images/hand-leaf.svg';
import globalIcon from '@axa-ch/materials/images/global.svg';
import keysIcon from '@axa-ch/materials/images/keys.svg';
import contractIcon from '@axa-ch/materials/images/contract.svg';

export default html`
  <axa-policy-features title="Unsere Angebote für Sie" variant="white">
    <axa-policy-features-item
      title="Autoversicherung"
      description="A 5 star car insurance with affordable premium services"
      icon=${carIcon}
    ></axa-policy-features-item>
    <axa-policy-features-item
      title="Hausratversicherung"
      description="We reward safe drivers : 75% no claims discount + an extra 10% off if you get a quote online. This is a long text."
      icon="${chairIcon}"
    ></axa-policy-features-item>
    <axa-policy-features-item
      title="Privathaftpflicht"
      description="This SVG is loaded externally."
      icon="${glassIcon}"
    ></axa-policy-features-item>
    <axa-policy-features-item
      title="Rechtsschutzversicherung"
      description="We reward safe drivers : 75% no claims discount + an extra 10% off if you get a quote online"
      icon="${legalIcon}"
    ></axa-policy-features-item>
    <axa-policy-features-item
      title="3. Säule – Private Vorsorge"
      description="We reward safe drivers : 75% no claims discount + an extra 10% off if you get a quote online"
      icon="${handIcon}"
    ></axa-policy-features-item>
    <axa-policy-features-item
      title="Reiseversicherung"
      description="We reward safe drivers : 75% no claims discount + an extra 10% off if you get a quote online"
      icon="${globalIcon}"
    ></axa-policy-features-item>
    <axa-policy-features-item
      title="Mietkaution"
      description="We reward safe drivers : 75% no claims discount + an extra 10% off if you get a quote online"
      icon="${keysIcon}"
    ></axa-policy-features-item>
    <axa-policy-features-item
      title="Alle Versicherungen"
      description="We reward safe drivers : 75% no claims discount + an extra 10% off if you get a quote online"
      icon="${contractIcon}"
    ></axa-policy-features-item>
  </axa-policy-features>
`;
