import React, { ReactElement } from 'react';
import { NativeLink } from './NativeLinks';
import { Button } from '../patterns';
import { ButtonLink } from '../patterns';
import { Link } from 'gatsby';

interface CalloutProps {
  imageUrl?: string;
  imageSvg?: ReactElement;
  title: string;
  description: string;
  linkToTitle: string;
  linkToUrl: string;
  isInternalLink?: boolean;
}

export default function Callout({
  imageUrl,
  imageSvg,
  title,
  description,
  linkToTitle,
  linkToUrl,
  isInternalLink,
}: CalloutProps): ReactElement {
  return (
    <div className="flex Callout align-center mb-5">
      <div className="col Callout-image">
        {imageUrl && <img src={imageUrl} alt={title} />}
        {imageSvg && imageSvg}
      </div>
      <div className="col" style={{ paddingRight: 16 }}>
        <p className="text-xl">
          <strong>{title}</strong>
        </p>
        <p className="text-neutral-400">{description}</p>
      </div>
      <div className="col Callout-link">
        {isInternalLink ? (
          <Link to={linkToUrl}>
            <ButtonLink>{linkToTitle}</ButtonLink>
          </Link>
        ) : (
          <NativeLink href={linkToUrl}>
            <Button>{linkToTitle}</Button>
          </NativeLink>
        )}
      </div>
    </div>
  );
}
