import React from 'react';

export default function PageFooter() {
  return (
    <footer className="PageFooter clearfix">
      <div className="PageFooter-inner">
        <p>
          Legal information and terms of use © {new Date().getFullYear()} AXA
          All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
