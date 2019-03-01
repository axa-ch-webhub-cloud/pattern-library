export interface Props {
  // onAxaChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  classes?: string;
  value?: number;
  max?: number;
  showIcon?: boolean;
  showPercentage?: boolean;
}

export default interface AXAProgressBar extends HTMLElement, Props {
}
