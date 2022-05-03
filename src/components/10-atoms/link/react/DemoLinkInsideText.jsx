import React from 'react';
import AXALink from './AXALinkReact';

const DemoLinkInsideText = () => {
  return (
    <span>
      is simply dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industrys standard dummy text ever since the 1500s, when an
      unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap
      into electronic typesetting, remaining essentially unchanged.
      <AXALink variant="icon" icon="email" id="axalink_icon">
        here are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which dont look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isnt
        anything embarrassing hidden in the middle of text.
      </AXALink>
      <AXALink id="axalink_no_icon">
        here are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which dont look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isnt
        anything embarrassing hidden in the middle of text.
      </AXALink>
      It was popularised in the 1960s with the release of Letraset sheets
      containing Lorem Ipsum passages, and more recently with desktop publishing
      software like Aldus PageMaker including versions of Lorem Ipsum.
    </span>
  );
};

export default DemoLinkInsideText;
