import React from 'react';

interface AXADatepickerProps {
  locale?: string;
  year: number;
  month?: number;
  day?: number;
  onAXADateChange?: (utcDate: string) => any;
  inputfield?: boolean
  allowedyears?: string;
  labelbuttoncancel?: string;
  labelbuttonok?: string;
  inputplaceholder?: string;
}

declare function createAXADatepicker(
  createElement: typeof React.createElement
): React.ComponentType<AXADatepickerProps>;

export = createAXADatepicker;
