import { html } from 'lit';

import carIcon from '@axa-ch/materials/images/car.svg';
import chairIcon from '@axa-ch/materials/images/rocking-chair.svg';
import glassIcon from '@axa-ch/materials/images/broken-glass.svg';
import legalIcon from '@axa-ch/materials/images/legal.svg';
import handIcon from '@axa-ch/materials/images/hand-leaf.svg';
import globalIcon from '@axa-ch/materials/images/global.svg';
import keysIcon from '@axa-ch/materials/images/keys.svg';
import contractIcon from '@axa-ch/materials/images/contract.svg';

export default html`
  <axa-policy-features title="Our offers for you" variant="white">
    <axa-policy-features-item
      title="Car insurance"
      icon=${carIcon}
    ></axa-policy-features-item>
    <axa-policy-features-item
      title="Household contents insurance"
      icon="${chairIcon}"
    ></axa-policy-features-item>
    <axa-policy-features-item
      title="Personal liability insurance: covered for damage to third parties"
      icon="${glassIcon}"
    ></axa-policy-features-item>
    <axa-policy-features-item
      title="Legal protection insurance"
      icon="${legalIcon}"
    ></axa-policy-features-item>
    <axa-policy-features-item
      title="Pillar 3 – private pension provision"
      icon="${handIcon}"
    ></axa-policy-features-item>
    <axa-policy-features-item
      title="Travel insurance"
      icon="${globalIcon}"
    ></axa-policy-features-item>
    <axa-policy-features-item
      title="Rental guarantee"
      icon="${keysIcon}"
    ></axa-policy-features-item>
    <axa-policy-features-item
      title="All insurance"
      icon="${contractIcon}"
    ></axa-policy-features-item>
  </axa-policy-features>
`;
