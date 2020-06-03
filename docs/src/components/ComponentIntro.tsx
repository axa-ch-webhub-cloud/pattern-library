import React, { ReactElement } from 'react';
import { ButtonLink } from '../patterns';
import GitHubIcon from './GitHubIcon';

interface Props {
  name: string;
  githubUrl: string;
}

export default function ComponentIntro({
  name,
  githubUrl,
}: Props): ReactElement {
  return (
    <div>
      <header className="MDXPage-header">
        <div className="MDXPage-headerContent Container Container--narrow">
          <div className="MDXPage-headerContentLeft">
            <h1 className="h1 heading text-5xl">{name}</h1>
          </div>

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
        </div>
      </header>
    </div>
  );
}
