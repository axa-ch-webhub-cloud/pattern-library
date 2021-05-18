import React from 'react';

export type AXADatepickerChangeEvent = {
  target: {
    value: string;
  };
};

export interface AXADatepickerProps {
  dataTestId?: string;
  inputfield?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (e: AXADatepickerChangeEvent) => any;
  onDateChange?: (date: Date) => any;
  onFocus?: (e?: any) => void;
  onBlur?: (e?: any) => void;
  onInputfieldKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  locale?: string;
  date?: Date;
  year?: number;
  month?: number;
  day?: number;
  /**
   * Individual years need to be specified as numbers,
   * date ranges need to be strings.
   * This prop is required.
   * Example: ['2010-2015', 2019, 2020]
   */
  allowedyears: Array<string | number>;
  placeholder?: string;
  monthtitle?: string;
  yeartitle?: string;
  invalid?: boolean;
  invaliddatetext?: string;
  disabled?: boolean;
  checkMark?: boolean;
  label?: string;
  required?: boolean;
  className?: string;
}

declare function createAXADatepicker(createElement: typeof React.createElement, version?: string): React.ComponentType<AXADatepickerProps>;

export default createAXADatepicker;
