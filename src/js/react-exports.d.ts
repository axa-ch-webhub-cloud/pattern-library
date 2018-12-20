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

export * from '../components/a-checkbox';
export * from '../components/a-choice';
export * from '../components/a-icon';
export const AXAIcon: React.ComponentClass<AXAIcon.Props>;
export * from '../components/a-input';
export * from '../components/a-radio';
export * from '../components/m-button';
export * from '../components/m-datepicker';
export * from '../components/m-dropdown';
export * from '../components/m-footer-languages';
export * from '../components/m-footer-legals';
export * from '../components/m-footer-links';
export * from '../components/m-footer-main';
export * from '../components/m-footer-social';
export * from '../components/m-footer-sub';
export * from '../components/m-form-group';
export * from '../components/m-header-burger';
export * from '../components/m-header-languages';
export * from '../components/m-header-logo';
export * from '../components/m-header-main';
export * from '../components/m-header-meta';
export * from '../components/m-header-meta-right';
export * from '../components/m-header-mobile';
export * from '../components/m-header-mobile-languages';
export * from '../components/m-header-mobile-navigation';
export * from '../components/m-header-mobile-others';
export * from '../components/m-header-navigation';
export * from '../components/m-header-others';
export * from '../components/m-header-top-content-bar';
export * from '../components/m-link';
export * from '../components/m-policy-feature-item';
export * from '../components/o-datepicker';
export * from '../components/o-footer';
export * from '../components/o-header';
export * from '../components/o-table';
