import React, { ReactElement } from 'react';
import _ from 'lodash';
import OverviewItem from './OverviewItem';

interface ComponentProp {
  id: string;
  image: string;
  name: string;
}

interface Props {
  relatedItems: ComponentProp[];
}

export default function ComponentRelated({
  relatedItems,
}: Props): ReactElement {
  return (
    <div className="mb-8">
      <h2 className="h2">Composition</h2>
      <div className="Overview-groupItems">
        {relatedItems.map((item) => {
          return (
            <OverviewItem
              key={`overview-${_.uniqueId()}`}
              id={item.id}
              image={item.image}
            >
              {item.name}
            </OverviewItem>
          );
        })}
      </div>
    </div>
  );
}
