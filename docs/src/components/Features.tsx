import React from 'react';

import featureBg from '../images/features-homepage.jpg';

function Feature(props) {
  return (
    <div className="Feature">
      <h2 className="kicker">{props.title}</h2>
      <p className="Feature-description">{props.children}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section
      className="Features text-white clearfix"
      style={{ backgroundImage: `url(${featureBg})` }}
    >
      <div className="text-center">
        <div className="Features-alert">AXA Design System</div>
        <h1 className="heading text-6xl">
          Design and develop faster <br />a beautiful product
        </h1>
        <p className="text-lg">
          A tool to help you build experiences that people will love
        </p>
      </div>
      <div className="Container Features-grid">
        <Feature title="Cohesive design language">
          Ready-to-use, brand compliant designs.
        </Feature>
        <Feature title="Adaptable technology">
          A perfect base for development, no matter what technology you use
        </Feature>
        <Feature title="Active community">
          Join more than 500 AXA designers and developers
        </Feature>
      </div>
    </section>
  );
}
