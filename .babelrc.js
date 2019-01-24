const testPreset = [["env", {"modules": "commonjs"}], ["react"]];

module.exports = {
  presets:
    process.env.NODE_ENV === "test"
      ? testPreset
      : [["env", {
        "modules": false,
        "targets": {
          "browsers": ["last 2 versions", "safari >= 8", "not ie <= 10"]
        }
      }]],
  plugins: [
    ["nanohtml", {
      "useImport": true
    }],
    "transform-class-properties",
    "transform-es2015-destructuring",
    "transform-object-rest-spread",
    "babel-plugin-version-transform",
    ["inline-replace-variables", {
      ENV: {
        type: "node",
        replacement: "process.env.NODE_ENV"
      },
      DEV: "development",
      PROD: "production"
    }],
    ["transform-inline-environment-variables", {
      include: [
        "NODE_ENV"
      ]
    }],
    ["babel-plugin-transform-builtin-classes", {
      globals: [
        "Array",
        "Error",
        "HTMLAnchorElement",
        "HTMLAreaElement",
        "HTMLAudioElement",
        "HTMLBRElement",
        "HTMLBaseElement",
        "HTMLBodyElement",
        "HTMLButtonElement",
        "HTMLCanvasElement",
        "HTMLContentElement",
        "HTMLDListElement",
        "HTMLDataListElement",
        "HTMLDetailsElement",
        "HTMLDialogElement",
        "HTMLDirectoryElement",
        "HTMLDivElement",
        "HTMLDocument",
        "HTMLElement",
        "HTMLEmbedElement",
        "HTMLFieldSetElement",
        "HTMLFontElement",
        "HTMLFormElement",
        "HTMLFrameElement",
        "HTMLFrameSetElement",
        "HTMLHRElement",
        "HTMLHeadElement",
        "HTMLHeadingElement",
        "HTMLHtmlElement",
        "HTMLIFrameElement",
        "HTMLImageElement",
        "HTMLInputElement",
        "HTMLLIElement",
        "HTMLLabelElement",
        "HTMLLegendElement",
        "HTMLLinkElement",
        "HTMLMapElement",
        "HTMLMarqueeElement",
        "HTMLMediaElement",
        "HTMLMenuElement",
        "HTMLMetaElement",
        "HTMLMeterElement",
        "HTMLModElement",
        "HTMLOListElement",
        "HTMLObjectElement",
        "HTMLOptGroupElement",
        "HTMLOptionElement",
        "HTMLOutputElement",
        "HTMLParagraphElement",
        "HTMLParamElement",
        "HTMLPictureElement",
        "HTMLPreElement",
        "HTMLProgressElement",
        "HTMLQuoteElement",
        "HTMLScriptElement",
        "HTMLSelectElement",
        "HTMLShadowElement",
        "HTMLSlotElement",
        "HTMLSourceElement",
        "HTMLSpanElement",
        "HTMLStyleElement",
        "HTMLTableCaptionElement",
        "HTMLTableCellElement",
        "HTMLTableColElement",
        "HTMLTableElement",
        "HTMLTableRowElement",
        "HTMLTableSectionElement",
        "HTMLTemplateElement",
        "HTMLTextAreaElement",
        "HTMLTitleElement",
        "HTMLTrackElement",
        "HTMLUListElement",
        "HTMLUnknownElement",
        "HTMLVideoElement"
      ]
    }]
  ]
};