/**
 * As of 2018/12 this file "react-exports.d.ts" needs to live alongside the "react-exports.js" file,
 * so that the consuming project won't need to alter its tsconfig.json setting.
 * Then we can import components like this in Typescript:
 * import { AXAIcon } from '@axa-ch/patterns-library/lib/js/react-exports';
 *
 * Related info:
 *
 * - Declaring typings for modules in subfolders
 *   https://github.com/Microsoft/TypeScript/issues/17945
 *
 * - Recommendation for exposing multiple TypeScript modules from single NPM package
 *   https://github.com/Microsoft/TypeScript/issues/8305
 */

import * as React from 'react';

import { AXAIcon } from '../components/a-icon';
export const AXAIcon: React.ComponentClass<AXAIcon.Props>;

import { AXACheckbox } from '../components/a-checkbox';
export const AXACheckbox: React.ComponentClass<AXACheckbox.Props>;

import { AXAChoice } from '../components/a-choice';
export const AXAChoice: React.ComponentClass<AXAChoice.Props>;

import { AXAInput } from '../components/a-input';
export const AXAInput: React.ComponentClass<AXAInput.Props>;

import { AXARadio } from '../components/a-radio';
export const AXARadio: React.ComponentClass<AXARadio.Props>;

import { AXAButton } from '../components/m-button';
export const AXAButton: React.ComponentClass<AXAButton.Props>;

import { AXADropdown } from '../components/m-dropdown';
export const AXADropdown: React.ComponentClass<AXADropdown.Props>;

import { AXAFooterLanguages } from '../components/m-footer-languages';
export const AXAFooterLanguages: React.ComponentClass<AXAFooterLanguages.Props>;

import { AXADatepicker } from '../components/o-datepicker';
export const AXAMDatepicker: React.ComponentClass<AXADatepicker.Props>;
export const AXADatepicker: React.ComponentClass<AXADatepicker.Props>;

import { AXAFooterLegals } from '../components/m-footer-legals';
export const AXAFooterLegals: React.ComponentClass<AXAFooterLegals.Props>;

import { AXAFooterLinks } from '../components/m-footer-links';
export const AXAFooterLinks: React.ComponentClass<AXAFooterLinks.Props>;

import { AXAFooterMain } from '../components/m-footer-main';
export const AXAFooterMain: React.ComponentClass<AXAFooterMain.Props>;

import { AXAFooterSocial } from '../components/m-footer-social';
export const AXAFooterSocial: React.ComponentClass<AXAFooterSocial.Props>;

import { AXAFooterSub } from '../components/m-footer-sub';
export const AXAFooterSub: React.ComponentClass<AXAFooterSub.Props>;

import { AXAFormGroup } from '../components/m-form-group';
export const AXAFormGroup: React.ComponentClass<AXAFormGroup.Props>;

import { AXAHeaderBurger } from '../components/m-header-burger';
export const AXAHeaderBurger: React.ComponentClass<AXAHeaderBurger.Props>;

import { AXAHeaderLanguages } from '../components/m-header-languages';
export const AXAHeaderLanguages: React.ComponentClass<AXAHeaderLanguages.Props>;

import { AXAHeaderLogo } from '../components/m-header-logo';
export const AXAHeaderLogo: React.ComponentClass<AXAHeaderLogo.Props>;

import { AXAHeaderMain } from '../components/m-header-main';
export const AXAHeaderMain: React.ComponentClass<AXAHeaderMain.Props>;

import { AXAHeaderMeta } from '../components/m-header-meta';
export const AXAHeaderMeta: React.ComponentClass<AXAHeaderMeta.Props>;

import { AXAHeaderMetaRight } from '../components/m-header-meta-right';
export const AXAHeaderMetaRight: React.ComponentClass<AXAHeaderMetaRight.Props>;

import { AXAHeaderMobile } from '../components/m-header-mobile';
export const AXAHeaderMobile: React.ComponentClass<AXAHeaderMobile.Props>;

import { AXAHeaderMobileLanguages } from '../components/m-header-mobile-languages';
export const AXAHeaderMobileLanguages: React.ComponentClass<AXAHeaderMobileLanguages.Props>;

import { AXAHeaderMobileNavigation } from '../components/m-header-mobile-navigation';
export const AXAHeaderMobileNavigation: React.ComponentClass<AXAHeaderMobileNavigation.Props>;

import { AXAHeaderMobileOthers } from '../components/m-header-mobile-others';
export const AXAHeaderMobileOthers: React.ComponentClass<AXAHeaderMobileOthers.Props>;

import { AXAHeaderNavigation } from '../components/m-header-navigation';
export const AXAHeaderNavigation: React.ComponentClass<AXAHeaderNavigation.Props>;

import { AXAHeaderOthers } from '../components/m-header-others';
export const AXAHeaderOthers: React.ComponentClass<AXAHeaderOthers.Props>;

import { AXAHeaderTopContentBar } from '../components/m-header-top-content-bar';
export const AXAHeaderTopContentBar: React.ComponentClass<AXAHeaderTopContentBar.Props>;

import { AXALink } from '../components/m-link';
export const AXALink: React.ComponentClass<AXALink.Props>;

import { AXAPolicyFeatureItem } from '../components/m-policy-feature-item';
export const AXAPolicyFeatureItem: React.ComponentClass<AXAPolicyFeatureItem.Props>;

import { AXAHeader } from '../components/o-header';
export const AXAHeader: React.ComponentClass<AXAHeader.Props>;

import { AXATable } from '../components/o-table';
export const AXATable: React.ComponentClass<AXATable.Props>;

import { AXAFooter } from '../components/o-footer';
export const AXAFooter: React.ComponentClass<AXAFooter.Props>;
