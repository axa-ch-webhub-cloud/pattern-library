import { Icon } from '../a-icon';

export interface Props {
  onAxaChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  valid?: boolean;
  inline?: boolean;
  error?: string;
  disabled?: boolean;
  inputId?: string;
  type?: string; // todo: enumerate possible input types
  placeholder?: string;
  value?: string;
  name?: string;
  icon?: Icon;
}

export default interface AXAInput extends HTMLElement, Props {
}
