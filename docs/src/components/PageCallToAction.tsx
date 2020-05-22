import React from 'react';
import { ButtonLink } from '../patterns/';
import { Link } from 'gatsby';

export default function PageCallToAction() {
  return (
    <section className="PageCallToAction">
      <div className="Container PageCallToAction-inner">
        <div>
          <p className="text-uppercase text-sm">Helps & Contact</p>
          <p className="text-3xl heading">Any question? Any help?</p>
        </div>
        <Link to="/contact">
          <ButtonLink variant="inverted">Get in touch</ButtonLink>
        </Link>
      </div>
    </section>
  );
}
