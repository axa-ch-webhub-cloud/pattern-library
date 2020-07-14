import React, { ReactElement } from 'react';

interface Color {
  id: string;
  hexacode: string;
  usage: string;
}

interface Props {
  items: Color[];
}

export default function ColorGroup({ items }: Props): ReactElement {
  return (
    <div>
      <h2 className="h2">Current Design System Colors</h2>
      <p className="paragraph">
        Below you will find the colors currently used in the developed elements
        in the AXA Design System and their usage.
      </p>

      <div className="OverviewGrid">
        {items.map((item, index) => {
          return (
            <div key={index} className={`shadow-md`}>
              <div className={`bg-${item.id}`} style={{ minHeight: 160 }}></div>
              <div className="p-2">
                <p
                  className="kicker mb-0 text-neutral-600"
                  style={{ fontWeight: 400 }}
                >
                  {item.id} {item.hexacode}
                </p>
                <p className="font-bold text-lg">{item.usage}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
