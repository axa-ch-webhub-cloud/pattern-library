/**
 * As of 2018/12 this file "react-exports.d.ts" needs to live alongside the "react-exports.js" file,
 * so that the consuming project won't need to alter its tsconfig.json setting.
 * Then we can import like this in Typescript:
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

export * from '../components/a-icon';
export * from '../components/m-button';
