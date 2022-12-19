import React from 'react';

export interface AXAInputTextChangeEvent extends InputEvent {
  target: EventTarget & HTMLInputElement;
}

export interface AXAInputTextProps {
  refId?: string;
  name: string;
  label?: string;
  placeholder?: string;
  value?: string | number;
  currency?: string;
  defaultValue?: string;
  error?: string;
  type?: string;
  info?: string;
  invalid?: boolean;
  required?: boolean;
  disabled?: boolean;
  checkMark?: boolean;
  maxLength?: number;
  counter?: string;
  counterMax?: string;
  autocomplete?: boolean;
  isReact?: boolean;
  className?: string;
  pattern?: string;
  inputmode?: string;
  autofocus?: boolean;
  readonly?: boolean;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
  onChange?: (event: AXAInputTextChangeEvent, invalidFormat: Boolean) => void;
  onKeyDown?: (event: KeyboardEvent) => void;
  onKeyUp?: (event: KeyboardEvent) => void;
  onPaste?: (event: ClipboardEvent) => void;
}

declare function createAXAInputTextReact(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAInputTextProps>;
