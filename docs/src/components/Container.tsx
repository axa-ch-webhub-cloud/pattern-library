import React, { ReactElement } from 'react';

interface Props {
  children: React.ReactNode;
  background?: string;
}

export default function Container({
  children,
  background,
}: Props): ReactElement {
  return (
    <section className={`MainLayout-contentRight ${background}`}>
      <div className="Container-nextToSidebar">
        <div className="Content">{children}</div>
      </div>
    </section>
  );
}
