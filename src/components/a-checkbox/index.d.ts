export namespace AXACheckbox {
  export interface Props {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputId?: string;
    error?: boolean;
    value?: string;
    name?: string;
    checked?: boolean;
    disabled?: boolean;
  }
}

export interface AXACheckbox extends HTMLElement, AXACheckbox.Props {}
