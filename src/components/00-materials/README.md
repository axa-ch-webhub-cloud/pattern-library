# AXA Materials

Materials provides common used icons and images in the SVG format. In addition materials exports styles like colors, helpers, typography and layouts.

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/materials
```

```js
import { svg } from 'lit-html';
import { ArrowRightSvg } from '@axa-ch/materials/icons';

<span>${svg(ArrowRightSvg)}</span>;
```

### React

```js
import ArrowRightSvg from '@axa-ch/materials/icons-raw/arrow-right.svg';

<ArrowRightSvg />;
```

You need to use `SVGR` that takes external SVG files and transforms them into React components with Webpack. It is installed automatically if you use `create-pod-app`.

If you need to install it manually:

```bash
npm install @svgr/webpack --save-dev
```

```js
{
  test: /\.svg$/,
  use: ['@svgr/webpack'],
}
```

## Icon/Image set

### SVGs

(Complete list is visible [here](https://github.com/axa-ch/patterns-library/tree/develop/src/components/00-materials/icons-raw))

| icons            |
| ---------------- |
| AddSvg           |
| ArrowLeftSvg     |
| ArrowRightSvg    |
| AttachFileSvg    |
| CancelSvg        |
| CaretSvg         |
| CheckCircleSvg   |
| ClearSvg         |
| CloudUploadSvg   |
| CollapseSvg      |
| DateInputSvg     |
| DeleteForeverSvg |
| DocumentSvg      |
| DownloadSvg      |
| EmailSvg         |
| ExpandSvg        |
| FacebookSvg      |
| InfoSvg          |
| InstagramSvg     |
| KeySvg           |
| LinkedinSvg      |
| MobileSvg        |
| MessageSvg       |
| PersonSvg        |
| PhoneSvg         |
| PowerSvg         |
| SearchSvg        |
| TwitterSvg       |
| UploadSvg        |
| XingSvg          |
| YoutubeSvg       |

| images                          |
| ------------------------------- |
| AxaLogoSvg                      |
| AxaLogoOpenSvg                  |
| ... and many more in subfolders |

## Contribution

### Process of adding a new icon/image

1. Involve a designer by sending him the new SVG in question, unless the designer already has the file. He will review it and possibly change some things, for example by adjusting inner padding etc. in order to guarantee overall quality.
2. Remove unnecessary code inside the SVG:
   - a. `data-name="Layer 2"` # layer info for vector drawing software
   - b. `<path fill="#fff" d="M0 0h96v96H0z"/>` # outer bounding box filled with white background
3. - a. use the internal [svgo](https://github.com/svg/svgo) -invoking scripts `npm run build-icons` or `npm run build-images` from materials itself to clean up and optimize the SVGs, then copy the optimized files back from the `.tmp` folder to `icons-raw` or `images-raw`
   - b. alternatively use the [online SVG optimizer](https://jakearchibald.github.io/svgomg/) for the same purpose
4. Manually review the SVGs produced in the last step: add or edit &lt;path&gt; attributes, setting `fill="currentColor"` and/or `strokes="currentColor"` as appropriate. Remove unnecessary attributes.
5. Run `npm run build` to generate a js file for each svg file found. The generated files can be found in the `icons`and `images` folder.
