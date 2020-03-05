/**
 * Either one of enumerated string literals, or:
 *
 * - a string containing ".svg", will be loaded as URL
 * - a string containing "<svg", will be inlined
 */
export type Icon =
  | 'arrow-left'
  | 'arrow-right'
  | 'collapse'
  | 'document'
  | 'download'
  | 'email'
  | 'expand'
  | 'mobile'
  | 'phone'
  | 'plus'
  | 'search'
  | 'upload'
  | 'cloud-upload'
  | 'axa-logo'
  | 'axa-logo-open'
  | String;
