import React, { ReactElement } from 'react';

interface Props {
  children: ReactElement;
}

export default function Alert({ children }: Props): ReactElement {
  return (
    <div className="alert">
      <div className="alert-icon">⚠️</div>
      <div className="alert-content">{children}</div>
    </div>
  );
}
