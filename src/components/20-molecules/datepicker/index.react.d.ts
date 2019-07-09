import React from 'react';

type AXADatepickerChangeEvent = {
  target: {
    value: string;
  }
}

interface AXADatepickerProps {
  locale?: string;
  /**
   * Year is mandatory until this issue gets resolved:
   * https://github.com/axa-ch/patterns-library/issues/1149
   */
  year: number;
  month?: number;
  day?: number;
  onChange?: (e: AXADatepickerChangeEvent) => any;
  inputfield?: boolean
  allowedyears?: string;
  labelbuttoncancel?: string;
  labelbuttonok?: string;
  placeholder?: string;
  monthtitle?: string;
  yeartitle?: string;
  invaliddatetext?: string;
  value?: string;
}

declare function createAXADatepicker(
  createElement: typeof React.createElement
): React.ComponentType<AXADatepickerProps>;

export = createAXADatepicker;
