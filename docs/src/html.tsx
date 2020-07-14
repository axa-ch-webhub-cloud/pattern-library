import React, { ReactElement } from 'react';

interface Props {
  htmlAttributes: {};
  headComponents: [];
  bodyAttributes: {};
  preBodyComponents: [];
  body: string;
  postBodyComponents: [];
}

export default function HTML({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents,
}: Props): ReactElement {
  return (
    <html {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div
          key="body"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: body }}
          id="___gatsby"
        />
        {postBodyComponents}
      </body>
    </html>
  );
}
