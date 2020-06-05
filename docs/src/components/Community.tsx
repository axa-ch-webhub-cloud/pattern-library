import React from 'react';
import Callout from './Callout';

import { social } from '../../siteConfig';
import slackIcon from 'images/icons/slack.png';
import emailIcon from 'images/icons/email.svg';

export default function Community() {
  return (
    <>
      <h2 className="h2">AXA Community</h2>
      <p>
        Share your work, ask questions, give feedback, access knowledge, promote
        the AXA tools within your team! Join more than 600 AXA designers,
        developers, product and business owners on hot topics around digital.
      </p>
      <p className="text-2xl font-bold">Direct on Slack</p>
      <Callout
        imageUrl={slackIcon}
        title="Be part of the slack community"
        description="An active community of AXA production teams all around the world, discussing everything digital in AXA."
        linkToTitle="Join"
        linkToUrl={social.slackUrl}
      />
      <p className="text-2xl font-bold">Newsletter</p>
      <Callout
        imageUrl={emailIcon}
        title="AXA Design System newsletter"
        description="Be the first to know the latest AXA brand updates on digital, delivered directly to your inbox."
        linkToTitle="Subscribe"
        linkToUrl={social.newsletterUrl}
      />
    </>
  );
}
