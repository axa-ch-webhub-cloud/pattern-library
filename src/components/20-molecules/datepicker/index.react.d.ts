import React from 'react';

type AXADatepickerChangeEvent = {
  target: {
    value: string;
  }
}

interface AXADatepickerProps {
  dataTestId?: string;
  inputfield?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (e: AXADatepickerChangeEvent) => any;
  onDateChange?: (date: typeof Date) => any;
  onFocus?: (e?: any) => void;
  onBlur?: (e?: any) => void;
  locale?: string;
  date? : typeof Date;
  year?: number;
  month?: number;
  day?: number;
  allowedyears?: Array<string>;
  labelbuttonok?: string;
  labelbuttoncancel?: string;
  placeholder?: string;
  monthtitle?: string;
  yeartitle?: string;
  invaliddatetext?: string;
  embedded?: boolean;
  id?: string;
}

declare function createAXADatepicker(
  createElement: typeof React.createElement
): React.ComponentType<AXADatepickerProps>;

export = createAXADatepicker;
