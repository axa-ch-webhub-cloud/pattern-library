import { html } from 'lit';

import {
  RockingChairSvg,
  CarSvg,
  BrokenGlassSvg,
  LegalSvg,
  HandLeafSvg,
  GlobalSvg,
  KeysSvg,
  ContractSvg,
} from '@axa-ch/materials/images';

export default html`
  <axa-policy-features title="Our offers for you" variant="white">
    <axa-policy-features-item
      title="Car insurance"
      icon=${CarSvg}
    ></axa-policy-features-item>
    <axa-policy-features-item
      title="Household contents insurance"
      icon="${RockingChairSvg}"
    ></axa-policy-features-item>
    <axa-policy-features-item
      title="Personal liability insurance: covered for damage to third parties"
      icon="${BrokenGlassSvg}"
    ></axa-policy-features-item>
    <axa-policy-features-item
      title="Legal protection insurance"
      icon="${LegalSvg}"
    ></axa-policy-features-item>
    <axa-policy-features-item
      title="Pillar 3 – private pension provision"
      icon="${HandLeafSvg}"
    ></axa-policy-features-item>
    <axa-policy-features-item
      title="Travel insurance"
      icon="${GlobalSvg}"
    ></axa-policy-features-item>
    <axa-policy-features-item
      title="Rental guarantee"
      icon="${KeysSvg}"
    ></axa-policy-features-item>
    <axa-policy-features-item
      title="All insurance"
      icon="${ContractSvg}"
    ></axa-policy-features-item>
  </axa-policy-features>
`;
