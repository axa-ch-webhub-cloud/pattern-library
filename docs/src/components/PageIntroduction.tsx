import React, { ReactElement } from 'react';

interface Props {
  title: string;
  description?: string;
  imageUrl?: string;
}

export default function PageIntroduction({
  title,
  description,
  imageUrl,
}: Props): ReactElement {
  return (
    <div style={{ marginBottom: 96 }}>
      <h1 className="h1 heading text-6xl">{title}</h1>
      {description && <p className="text-xl mt-3">{description}</p>}
      {imageUrl && <img className="Hero-image" src={imageUrl} alt={title} />}
    </div>
  );
}
