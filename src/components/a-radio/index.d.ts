export namespace AXARadio {
  export interface Props {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputId?: string;
    error?: boolean;
    value?: string;
    name: string;
    checked?: boolean;
    disabled?: boolean;
  }
}

export interface AXARadio extends HTMLElement, AXARadio.Props {}
