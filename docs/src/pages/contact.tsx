import React from 'react';

import Layout from '../components/Layout';
import Support from '../components/Support';
import PageIntroduction from '../components/PageIntroduction';
import Community from '../components/Community';

import { feedback, social } from '../../siteConfig';
import ContactUs from '../components/ContactUs';

import emailIcon from '../images/icons/email.svg';
import slackIcon from '../images/icons/slack-dark.png';
import githubIcon from '../images/icons/github-dark.png';
import feedbackIcon from '../images/icons/thumb.svg';
import SEO from '../components/SEO';
import Container from '../components/Container';

const contactItems = [
  {
    icon: emailIcon,
    title: 'Email',
    description:
      'Tell us about your project, we can propose you a tailored solution on how you can achieve your objectives :',
    linkText: 'Send us a mail',
    linkUrl: feedback.email,
  },
  {
    icon: slackIcon,
    title: 'Slack',
    description: 'It is the best choice for quick, day-to-day inquiries :',
    linkText: 'Go to slack',
    linkUrl: social.slackUrl,
  },
  {
    icon: githubIcon,
    title: 'GitHub',
    description: 'Let’s talk about the code :',
    linkText: 'GitHub link',
    linkUrl: social.githubUrl,
  },
  {
    icon: feedbackIcon,
    title: 'Feedback form',
    description: 'You want to share your thoughts on the tool?',
    linkText: 'Feedback form link',
    linkUrl: feedback.formUrl,
  },
];

export default function contactPage() {
  return (
    <Layout>
      <SEO title="Help and Contact" />

      <Container>
        <PageIntroduction title="Help & Contact">
          The AXA core team provides support for users in adopting the AXA
          Design System. Reach out to us with the details of your project and we
          will do our bet to provide you with a tailored advice on how to reach
          your project objectives.
        </PageIntroduction>

        <Support />
      </Container>

      <Container background="bg-neutral-200">
        <Community />
      </Container>

      <Container>
        <ContactUs contactItems={contactItems} />
      </Container>
    </Layout>
  );
}
