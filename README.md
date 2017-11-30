[![Build Status](https://travis-ci.org/LucaMele/jquery-free.svg?branch=master)](https://travis-ci.org/axa-ch/patterns-library)

# The AXA CH Style and HTML Guide (Editor's Draft)
This is the core style-guide used for AXA Switzerland. It's based on Web-Components.
Web-Components are natively supported in modern browser. This repo contains also polyfills for those
less "cool" browsers out there. Support is:

* ie 11 (Polyfill for template, html import, shadow dom and custom element)
* EDGE (Polyfill for html import, shadow dom and custom element)
* FF (Polyfill for html import, shadow dom and custom element)
* Chrome / Chrome Mobile (100% native)
* Safari / iOS Safari (Polyfill for html import)

The main goal here to have components that are reusable on every frontend technology. It doesn't matter if you are using angular or React, you can always import the Components from the styleguide.

Are you not familiar with webcomponents?
Then stop here and read this (chapter Introduction and Specification): https://www.webcomponents.org/introduction

To know how they work in your browser go to the w3c Spec. Here the link to the custom element for example: https://www.w3.org/TR/custom-elements/

Hold on, don't re-invent the wheel! Check if that what you have to do already exists: https://www.webcomponents.org/  

## Setting things up with your Repo:

Well first of all install the npm module:

`npm install --save @axa-ch/patterns-library`

Then, you can add the component of your choice simply by importing the js! Styles, HTML and JS will be all in one file! See example below:

`import '@axa-ch/patterns-library/dist/components/a-button'` in your index.js
to use it, simple append it: `<axa-button>Hello</axa-button>`

To use the webcomponents with older browsers, import the polyfills which are available under
`<script src="@axa-ch/patterns-library/dist/components/webcomponents-sd-ce.js"></script>`

A quick overview what they do:
`webcomponents-lite.js` include all the polyfills needed for ES6 ready browsers and include polyfills for all 4 parts of the webcomponents specs. For AXA Patterns, only `webcomponents-sd-ce.js` is actually needed (it is just shadow dom and custom element). All components within patterns library need only custom element polyfill.
`es6-polyfills.js` are all the polyfills needed for almost ES6 ready browsers like ie11.
`webcomponents-loader` loads the needed polyfills that is needed asynchronously.

If you are using your own framework, be aware to convert the webcponents to a component for your framework (simple components like <axa-button> does not need to be converted):

Do you love **angular >= 2**? Here a helpfull link for you: https://www.sitepen.com/blog/2017/09/14/using-web-components-with-angular/

Do you love **React**? Here a helpfull link for you: https://github.com/webcomponents/react-integration

Do you love **Vue**? Here a helpfull link for you: https://alligator.io/vuejs/vue-integrate-web-components/

## Adding your first Style-Guide component:
Super easy: just go to `src/components` and create a new folder having a `index.scss`, `index.html` and `index.js`. Take the dummy component as reference and there you go, your component is done and ready in the styleguide! No other steps required! No include in global `index.js` or `index.scss`. All done.

## DEV stuff:

commands:

* To build to dist simply run `npm run build`
* to run only the server run `npm start DEV` or `npm start PROD`
* to run only the watches run `npm run watch`
* to run server and watchers `npm run serve`
* to run PROD server `npm run serve-build-prod`

### Guide to for the base components:

When you create your own component please .....
