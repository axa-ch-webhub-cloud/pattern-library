import React from 'react';
import { ButtonLink } from '../patterns/';
import { Link } from 'gatsby';

export default function PageCallToAction() {
  return (
    <section className="PageCallToAction">
      <div className="Container PageCallToAction-inner">
        <div>
          <p className="text-uppercase text-xs">Help & Contact</p>
          <p className="text-2xl heading">Any question?</p>
        </div>
        <Link to="/contact">
          <ButtonLink variant="inverted">Get in touch</ButtonLink>
        </Link>
      </div>
    </section>
  );
}
