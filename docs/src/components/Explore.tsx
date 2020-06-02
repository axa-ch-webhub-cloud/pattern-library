import React from 'react';
import Callout from './Callout';

import moleculeIcon from 'images/icons/molecule.svg';

export default function Community() {
  return (
    <>
      <h2 className="h2">AXA Design System</h2>
      <p>
        The AXA Design System has been conceived in a manner to align with the
        core AXA principles and to carry forward this message.
      </p>
      <Callout
        imageUrl={moleculeIcon}
        title=" Understanding the AXA Design System"
        description="Atoms? Molecules? Organisms? Master the structure approach of AXA Design System."
        linkToTitle="Know more"
        linkToUrl={'/components'}
        isInternalLink={true}
      />
    </>
  );
}
