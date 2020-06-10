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
    <div className="flex Callout align-center mt-2 mb-5">
      <div className="col Callout-image">
        {imageUrl && <img src={imageUrl} alt={title} />}
        {imageSvg && imageSvg}
      </div>
      <div className="col" style={{ paddingRight: 28, flex: 2 }}>
        <p className="text-base">
          <strong>{title}</strong>
        </p>
        <p className="text-sm text-neutral-600">{description}</p>
      </div>
      <div className="col">
        {isInternalLink ? (
          <Link to={linkToUrl}>
            <ButtonLink size="large" className="w-100">
              {linkToTitle}
            </ButtonLink>
          </Link>
        ) : (
          <NativeLink href={linkToUrl}>
            <Button size="large" className="w-100">
              {linkToTitle}
            </Button>
          </NativeLink>
        )}
      </div>
    </div>
  );
}
