export interface Props {
  // onAxaChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  classes?: string;
  value?: number;
  max?: number;
  iconShown?: boolean;
  percentageShown?: boolean;
}

export default interface AXAProgressBar extends HTMLElement, Props {
}
