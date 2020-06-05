import React, { ReactElement } from 'react';

interface Item {
  kicker: string;
  text?: string;
  heading?: string;
  linkTo?: string;
  imageUrl: string;
}

interface VerticalItemsProps {
  items: Item[];
}

export default function VerticalItems({
  items,
}: VerticalItemsProps): ReactElement {
  return (
    <div className="Content-vertical">
      {items.map((item) => {
        return (
          <div className="Content-vertical-item flex align-center">
            <img
              className="Content-vertical-image"
              src={item.imageUrl}
              alt={item.kicker}
            />

            <div className="col">
              <p className="kicker mb-0">{item.kicker}</p>
              {item.text && <p className="text-xl">{item.text}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
