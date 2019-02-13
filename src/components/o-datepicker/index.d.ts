//used for AXAMDatepicker also
export interface Props {
  onAxaChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  classes?: string;
  buttonOk?: string;
  buttonCancel?: string;
  locale?: string;
  value?: string;
  startYear?: number | "TODAY";
  startMonth?: number | "TODAY";
  selectedDay?: number;
  lowerEndYear?: number;
  higherEndYear?: number;
  outputIso?: string;
}

export default interface AXADatepicker extends HTMLElement, Props {}
