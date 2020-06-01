import React, { ReactElement } from 'react';

interface Props {
  title: string;
  description?: string;
}

export default function PageIntroduction(props: Props): ReactElement {
  return (
    <div style={{ marginBottom: 96 }}>
      <h1 className="h1 heading text-5xl">{props.title}</h1>
      <p style={{ fontSize: 20 }}>{props.description}</p>
    </div>
  );
}
