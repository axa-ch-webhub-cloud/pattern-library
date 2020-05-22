import React, { ReactElement } from 'react';
import { ButtonLink } from '../patterns';
import GitHubIcon from './GitHubIcon';

interface Props {
  name: string;
  githubUrl: string;
  guidelineUrl?: string;
}

export default function ComponentIntro({
  name,
  githubUrl,
  guidelineUrl,
}: Props): ReactElement {
  return (
    <div>
      <header className="MDXPage-header">
        <div className="MDXPage-headerContent">
          <div className="MDXPage-headerContentLeft">
            <h1 className="h1">{name}</h1>
          </div>

          {githubUrl && (
            <ButtonLink variant="secondary" href={githubUrl} external={true}>
              <GitHubIcon
                width="16"
                height="16"
                style={{
                  marginRight: 10,
                }}
              />
              View source
            </ButtonLink>
          )}

          {guidelineUrl && (
            <ButtonLink
              className="ml-3"
              variant="secondary"
              href={guidelineUrl}
              external={true}
            >
              View guidelines
            </ButtonLink>
          )}
        </div>
      </header>
    </div>
  );
}
