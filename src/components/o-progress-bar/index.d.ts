export interface Props {
  classes?: string;
  value?: number;
  max?: number;
  iconShown?: boolean;
  percentageShown?: boolean;
}

export default interface AXAProgressBar extends HTMLElement, Props {
}
