import React, { ReactElement, ReactNode } from 'react';

interface Props {
  title: string;
  children?: ReactNode;
  imageUrl?: string;
}

export default function PageIntroduction({
  title,
  children,
  imageUrl,
}: Props): ReactElement {
  return (
    <div style={{ marginBottom: 96 }}>
      <h1 className="h1 heading text-6xl">{title}</h1>
      {children && <p className="text-xl mt-3">{children}</p>}
      {imageUrl && <img className="Hero-image" src={imageUrl} alt={title} />}
    </div>
  );
}
