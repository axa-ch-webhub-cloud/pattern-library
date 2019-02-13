export interface Item {
  name?: string;
  url?: any;
  value?: any;
}

export interface Props {
  onAxaChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inFlow?: boolean;
  items?: Item[];
  native?: boolean;
  size?: "sm";
  // can't be optional, otherwise:
  // Error:(22, 18) TS2320: Interface 'AXADropdown' cannot simultaneously extend types 'HTMLElement' and 'Props'.
  // Named property 'title' of types 'HTMLElement' and 'Props' are not identical.
  // https://github.com/Microsoft/TypeScript/issues/4278
  title: string;
  value?: any;
  iconsPathPrefix?: string;
}

export default interface AXADropdown extends HTMLElement, Props {}
