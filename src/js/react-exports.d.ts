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

export * from '../components/a-checkbox';
export * from '../components/a-choice';
export * from '../components/a-icon';
export * from '../components/a-input';
export * from '../components/a-radio';
export * from '../components/m-button';
export * from '../components/m-datepicker';
export * from '../components/m-dropdown';
export * from '../components/m-link';
export * from '../components/o-datepicker';

// not typed yet, but at least it works in TS:
export const AXAFooter: React.ComponentClass<any>;
export const AXAFooterLanguages: React.ComponentClass<any>;
export const AXAFooterLegals: React.ComponentClass<any>;
export const AXAFooterLinks: React.ComponentClass<any>;
export const AXAFooterMain: React.ComponentClass<any>;
export const AXAFooterSocial: React.ComponentClass<any>;
export const AXAFooterSub: React.ComponentClass<any>;
export const AXAFormGroup: React.ComponentClass<any>;
export const AXAHeader: React.ComponentClass<any>;
export const AXAHeaderBurger: React.ComponentClass<any>;
export const AXAHeaderLanguages: React.ComponentClass<any>;
export const AXAHeaderLogo: React.ComponentClass<any>;
export const AXAHeaderMain: React.ComponentClass<any>;
export const AXAHeaderMeta: React.ComponentClass<any>;
export const AXAHeaderMetaRight: React.ComponentClass<any>;
export const AXAHeaderMobile: React.ComponentClass<any>;
export const AXAHeaderMobileLanguages: React.ComponentClass<any>;
export const AXAHeaderMobileNavigation: React.ComponentClass<any>;
export const AXAHeaderMobileOthers: React.ComponentClass<any>;
export const AXAHeaderNavigation: React.ComponentClass<any>;
export const AXAHeaderOthers: React.ComponentClass<any>;
export const AXAHeaderTopContentBar: React.ComponentClass<any>;
export const AXAPolicyFeatureItem: React.ComponentClass<any>;
export const AXATable: React.ComponentClass<any>;
