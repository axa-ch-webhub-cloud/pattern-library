import React, { ReactElement } from 'react';
import { NativeLink } from './NativeLinks';

interface ContactItem {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

interface ContactUsProps {
  contactItems: ContactItem[];
}

export default function ContactUs({
  contactItems,
}: ContactUsProps): ReactElement {
  return (
    <>
      <div className="mb-6">
        <h2 className="h2">Contact Us</h2>
        <p>
          For any questions or feedback — don’t hesitate to be in touch via the
          channel that suits you best.
        </p>
      </div>
      <div className="grid">
        {contactItems.map((item, index) => {
          return (
            <div key={`contact-{$index}`}>
              <img className="mw-5" src={item.icon} alt={item.title} />
              <p className="text-xl">
                <strong>{item.title}</strong>
              </p>
              <p className="text-neutral-400">
                {item.description} <br />
                <NativeLink className="text-dark" href={item.linkUrl}>
                  {item.linkText}
                </NativeLink>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
