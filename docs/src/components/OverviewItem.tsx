import React, { ReactElement, ReactNode } from 'react';
import { Link } from 'gatsby';

interface Props {
  id: string;
  children: ReactNode;
  image: string;
}

export default function OverviewItem({
  id,
  children,
  image,
}: Props): ReactElement {
  return (
    <Link to={`/components/${id}`} className="flex align-center OverviewItem">
      <img className="mw-8" src={image} alt={children} />

      <div className="col">
        <span className="h3">{children}</span>
      </div>
      <div className="col text-right mr-5">
        <div className="OverviewKicker">Discover component</div>
      </div>
    </Link>
  );
}
