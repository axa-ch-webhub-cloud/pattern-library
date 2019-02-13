/**
 * Allow to use <axa-core/> in JSX by importing:
 * import '@axa-ch/patterns-library/lib/components/u-core';
 */

export {}; // this file needs to be a module

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'axa-core': any;
    }
  }
}
