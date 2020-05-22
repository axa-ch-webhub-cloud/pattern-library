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
        <h3 className="heading">{props.title}</h3>
        <p className="MediaItem-published">{props.topic}</p>
        <a className="kicker" href="#">Discover</a>
      </div>
    </Link>
  );
}

export default function MediaAtomic(props: MediaProps): ReactElement {
  return (
    <section className="Media bg-neutral-2 clearfix">
      <div className="Media-inner Container">
        <header style={{ textAlign: 'center', marginTop: 64 }}>
          <h2 className="h2 text-4xl" style={{ marginTop: 32 }}>
            {props.title}
          </h2>
        </header>
        <div className="Media-grid md-4">
          {props.items.map((item) => (
            <MediaItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
