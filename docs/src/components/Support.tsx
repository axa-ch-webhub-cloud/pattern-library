import React from 'react';

import oneOoneImage from '../images/contact/support-1o1.jpg';
import adviceImage from '../images/contact/support-advice.jpg';

export default function Support() {
  return (
    <>
      <h2 className="h2">Support</h2>
      <p className="paragraph">
        Part of our mission is to guide you, AXA production teams, with the
        adoption of the tool during your digital journey.
      </p>
      <div className="flex align-center mb-5">
        <div className="col">
          <img
            src={oneOoneImage}
            alt="AXA Design System illustration"
            height="215"
          />
        </div>
        <div className="col">
          <div className="kicker">Day-to-day questions</div>
          <p className="paragraph">
            <strong>You need a clarification</strong> on any of the design/code
            elements? Something is not clear in the guidelines or processes?
            Don’t hesitate to reach out to us - we are happy to help.
          </p>
        </div>
      </div>
      <div className="flex align-center">
        <div className="col">
          <img
            src={adviceImage}
            alt="AXA Design System illustration"
            height="215"
          />
        </div>
        <div className="col">
          <div className="kicker">Design advice and assessments</div>
          <p className="paragraph">
            You have a digital project and{' '}
            <strong>you want to make sure the design is compliant</strong> to
            the AXA Brand standards? You need help and advice in adopting the
            AXA Design System in your project? We are here to accompany you
            through all phases.
          </p>
        </div>
      </div>
    </>
  );
}
