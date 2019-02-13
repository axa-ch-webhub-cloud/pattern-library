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

import { Props as AXAIconProps } from '../components/a-icon';
export const AXAIcon: React.ComponentClass<AXAIconProps>;

import { Props as AXACheckboxProps } from '../components/a-checkbox';
export const AXACheckbox: React.ComponentClass<AXACheckboxProps>;

import { Props as AXAChoiceProps } from '../components/a-choice';
export const AXAChoice: React.ComponentClass<AXAChoiceProps>;

import { Props as AXAInputProps } from '../components/a-input';
export const AXAInput: React.ComponentClass<AXAInputProps>;

import { Props as AXARadioProps } from '../components/a-radio';
export const AXARadio: React.ComponentClass<AXARadioProps>;

import { Props as AXAButtonProps } from '../components/m-button';
export const AXAButton: React.ComponentClass<AXAButtonProps>;

import { Props as AXADropdownProps } from '../components/m-dropdown';
export const AXADropdown: React.ComponentClass<AXADropdownProps>;

import { Props as AXAFooterLanguagesProps } from '../components/m-footer-languages';
export const AXAFooterLanguages: React.ComponentClass<AXAFooterLanguagesProps>;

import { Props as AXADatepickerProps } from '../components/o-datepicker';
export const AXAMDatepicker: React.ComponentClass<AXADatepickerProps>;
export const AXADatepicker: React.ComponentClass<AXADatepickerProps>;

import { Props as AXAFooterLegalsProps } from '../components/m-footer-legals';
export const AXAFooterLegals: React.ComponentClass<AXAFooterLegalsProps>;

import { Props as AXAFooterLinksProps } from '../components/m-footer-links';
export const AXAFooterLinks: React.ComponentClass<AXAFooterLinksProps>;

import { Props as AXAFooterMainProps } from '../components/m-footer-main';
export const AXAFooterMain: React.ComponentClass<AXAFooterMainProps>;

import { Props as AXAFooterSocialProps } from '../components/m-footer-social';
export const AXAFooterSocial: React.ComponentClass<AXAFooterSocialProps>;

import { Props as AXAFooterSubProps } from '../components/m-footer-sub';
export const AXAFooterSub: React.ComponentClass<AXAFooterSubProps>;

import { Props as AXAFormGroupProps } from '../components/m-form-group';
export const AXAFormGroup: React.ComponentClass<AXAFormGroupProps>;

import { Props as AXAHeaderBurgerProps } from '../components/m-header-burger';
export const AXAHeaderBurger: React.ComponentClass<AXAHeaderBurgerProps>;

import { Props as AXAHeaderLanguagesProps } from '../components/m-header-languages';
export const AXAHeaderLanguages: React.ComponentClass<AXAHeaderLanguagesProps>;

import { Props as AXAHeaderLogoProps } from '../components/m-header-logo';
export const AXAHeaderLogo: React.ComponentClass<AXAHeaderLogoProps>;

import { Props as AXAHeaderMainProps } from '../components/m-header-main';
export const AXAHeaderMain: React.ComponentClass<AXAHeaderMainProps>;

import { Props as AXAHeaderMetaProps } from '../components/m-header-meta';
export const AXAHeaderMeta: React.ComponentClass<AXAHeaderMetaProps>;

import { Props as AXAHeaderMetaRightProps } from '../components/m-header-meta-right';
export const AXAHeaderMetaRight: React.ComponentClass<AXAHeaderMetaRightProps>;

import { Props as AXAHeaderMobileProps } from '../components/m-header-mobile';
export const AXAHeaderMobile: React.ComponentClass<AXAHeaderMobileProps>;

import { Props as AXAHeaderMobileLanguagesProps } from '../components/m-header-mobile-languages';
export const AXAHeaderMobileLanguages: React.ComponentClass<AXAHeaderMobileLanguagesProps>;

import { Props as AXAHeaderMobileNavigationProps } from '../components/m-header-mobile-navigation';
export const AXAHeaderMobileNavigation: React.ComponentClass<AXAHeaderMobileNavigationProps>;

import { Props as AXAHeaderMobileOthersProps } from '../components/m-header-mobile-others';
export const AXAHeaderMobileOthers: React.ComponentClass<AXAHeaderMobileOthersProps>;

import { Props as AXAHeaderNavigationProps } from '../components/m-header-navigation';
export const AXAHeaderNavigation: React.ComponentClass<AXAHeaderNavigationProps>;

import { Props as AXAHeaderOthersProps } from '../components/m-header-others';
export const AXAHeaderOthers: React.ComponentClass<AXAHeaderOthersProps>;

import { Props as AXAHeaderTopContentBarProps } from '../components/m-header-top-content-bar';
export const AXAHeaderTopContentBar: React.ComponentClass<AXAHeaderTopContentBarProps>;

import { Props as AXALinkProps } from '../components/m-link';
export const AXALink: React.ComponentClass<AXALinkProps>;

import { Props as AXAPolicyFeatureItemProps } from '../components/m-policy-feature-item';
export const AXAPolicyFeatureItem: React.ComponentClass<AXAPolicyFeatureItemProps>;

import { Props as AXAHeaderProps } from '../components/o-header';
export const AXAHeader: React.ComponentClass<AXAHeaderProps>;

import { Props as AXATableProps } from '../components/o-table';
export const AXATable: React.ComponentClass<AXATableProps>;

import { Props as AXAFooterProps } from '../components/o-footer';
export const AXAFooter: React.ComponentClass<AXAFooterProps>;

import { Props as AXACard } from '../components/o-card';
export const AXACard: React.ComponentClass<AXACard>;

import { Props as AXAFormOptionBox } from '../components/o-form-option-box';
export const AXAFormOptionBox: React.ComponentClass<AXAFormOptionBox>;
