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
    <div className="flex align-center">
      <div className="col">
        <img className="OverviewItem-image" src={image} alt={children} />
      </div>
      <div className="col">
        <span className="h3">{children}</span>
      </div>
      <div className="col">
        <Link to={`/components/${id}`} className="OverviewItem">
          Discover component
        </Link>
      </div>
    </div>
  );
}
