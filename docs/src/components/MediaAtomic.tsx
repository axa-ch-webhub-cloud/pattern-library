import React, { ReactElement } from 'react';
import { Link } from 'gatsby';

interface MediaProps {
  title: string;
  items: MediaItemProps[];
}

interface MediaItemProps {
  title: string;
  topic: string;
  image: string;
  link: string;
}

function MediaItem(props: MediaItemProps): ReactElement {
  return (
    <Link to={props.link} className="">
      <figure>
        <img src={props.image} alt={props.title} className="" />
      </figure>
      <div className="MediaItem-content">
        <h3 className="heading mb-1">{props.title}</h3>
        <p className="kicker text-neutral-600">{props.topic}</p>
        <p className="text-xs text-blue-base mt-2 font-bold text-uppercase">
          Discover
        </p>
      </div>
    </Link>
  );
}

export default function MediaAtomic({
  title,
  items,
}: MediaProps): ReactElement {
  return (
    <section className="Media bg-neutral-200 clearfix">
      <div className="Media-inner Container">
        <header style={{ textAlign: 'center', marginTop: 64 }}>
          <h2 className="h2 text-5xl mb-6" style={{ marginTop: 32 }}>
            {title}
          </h2>
        </header>
        <div className="Media-grid md-4">
          {items.map((item) => (
            <MediaItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
