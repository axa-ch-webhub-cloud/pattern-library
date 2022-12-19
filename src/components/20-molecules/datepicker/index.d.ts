import React from 'react';

export interface AXADatepickerProps {
  dataTestId?: string;
  inputfield?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (event: InputEvent) => void;
  onDateChange?: (date: Date) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
  onInputfieldKeyUp?: (event: KeyboardEvent) => void;
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
  name?: string;
}

declare function createAXADatepickerReact(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXADatepickerProps>;
