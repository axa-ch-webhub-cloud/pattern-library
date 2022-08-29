import React from 'react';
import { createReactContainer } from '../../../../utils/create-react-container';
import { args, argTypes } from '../story.args';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXAFileUploadReact from './AXAFileUploadReact';

function getTime(date) {
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

function logEvent(eventName) {
  const item = document.createElement('li');
  item.innerHTML = `${eventName} triggered on ${getTime(new Date())}`;
  document.querySelector('#m-fileupload-story__events').appendChild(item);
}

function logFiles(e) {
  const files = e.detail;

  document.querySelector('#m-fileupload-story__files').innerHTML = '';
  if (files.length > 0) {
    files.forEach(file => {
      const item = document.createElement('li');
      item.innerHTML = file.name;
      document.querySelector('#m-fileupload-story__files').appendChild(item);
    });
  }
}

export default {
  title: 'Examples/File Upload/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
  },
  args,
  argTypes,
};

export const FileUpload = _args =>
  createReactContainer(
    <div style={{ width: _args.width }}>
      <AXAFileUploadReact
        {..._args}
        onFileDrop={() => {
          logEvent('onFileDrop');
        }}
        onFileRemove={() => {
          logEvent('onFileRemove');
        }}
        onChange={() => {
          logEvent('onChange');
        }}
      >
        {_args.slot}
      </AXAFileUploadReact>
      <div>
        <p>Events:</p>
        <ul id="m-fileupload-story__events" />
      </div>
    </div>
  );

export const GetFilesFromOnchange = () =>
  createReactContainer(
    <div>
      <AXAFileUploadReact
        maxSizeOfSingleFileKB="500"
        onChange={e => {
          logFiles(e);
        }}
      />
      <div>
        <p>Files:</p>
        <ol id="m-fileupload-story__files" />
      </div>
    </div>
  );
