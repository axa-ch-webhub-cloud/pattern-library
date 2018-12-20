//used for AXAMDatepicker also
export namespace AXADatepicker {
  export interface Props {
    onAxaChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    classes?: string;
    buttonOk?: string;
    buttonCancel?: string;
    locale?: string;
    value?: string;
    startYear?: number | 'TODAY';
    startMonth?: number | 'TODAY';
    selectedDay?: number;
    lowerEndYear?: number;
    higherEndYear?: number;
    outputIso?: string;
  }
}

export interface AXADatepicker extends HTMLElement, AXADatepicker.Props {}
