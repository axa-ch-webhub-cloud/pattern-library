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
  onDateChange?: (date: Date) => any;
  onFocus?: (e?: any) => void;
  onBlur?: (e?: any) => void;
  locale?: string;
  date? : Date;
  year?: number;
  month?: number;
  day?: number;
  /**
   * Individual years need to be specified as numbers,
   * date ranges need to be strings.
   * This prop is required.
   * Example: ['2010-2015', 2019, 2020]
   */
  allowedyears: Array<string|number>;
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
