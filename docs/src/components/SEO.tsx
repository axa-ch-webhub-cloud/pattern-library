import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  title: string;
  description?: string;
}

export default function SEO({ title, description }: Props): ReactElement {
  return (
    <Helmet>
      <title>{title} • AXA Design System</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={`${title} • AXA Design System`} />
      <meta property="twitter:title" content={`${title} • AXA Design System`} />
    </Helmet>
  );
}
