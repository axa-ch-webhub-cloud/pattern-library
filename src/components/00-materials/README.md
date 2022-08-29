# AXA Materials

Materials provides common used icons and images in the SVG format. In addition materials exports styles like colors, helpers, typography and layouts.

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch-webhub-cloud/pattern-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/materials
```

```js
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { Arrow_forwardSvg } from '@axa-ch/materials/icons/material-design';

<span>${unsafeHTML(Arrow_forwardSvg)}</span>;
```

### React

```js
import ArrowForwardSvg from '@axa-ch/materials/icons-raw/material-design/arrow-forward.svg';

<ArrowForwardSvg />;
```

### React with Typescript

```js
import { ReactComponent as ArrowForwardSvg } from '@axa-ch/materials/icons-raw/material-design/arrow-forward.svg';

<ArrowForwardSvg />;
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

## Styles - Scss Mixins and Variables

### Colors

```scss
@import '@axa-ch/materials/styles/00-colors.scss';

body {
  background-color: $color-axa-blue;
}
```

### animations

```scss
@import '@axa-ch/materials/styles/20-animations.scss';
```

### Breakpoints

```scss
@import '@axa-ch/materials/styles/variables.scss';

body {
  // Rules for devices bigger than portrait mobile
  @media (min-width: $breakpoint-xs) {
    margin: 8px;
  }
}
```

### Typography

```scss
@import '@axa-ch/materials/styles/typography.scss';

body {
  font-family: $font-family-primary;
}
```

### Variables

```scss
@import '@axa-ch/materials/styles/variables.scss';

body {
  margin: $spacing-1;
}

.box {
  box-shadow: $box-shadow-1;
}
```

## Icon/Image set

### Sizes

Please note the size classes of `icons` and `images` [here](https://www.figma.com/file/6zurYk3bJpzUg0H2THSxGF/AXA-UI-Kit?node-id=0%3A57). Please just use these dimensions.

### SVGs

(Complete list is visible [here](https://github.com/axa-ch-webhub-cloud/pattern-library/tree/develop/src/components/00-materials/icons-raw))

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

### Process of adding a new image

1. Involve a designer by sending him the new SVG in question, unless the designer already has the file. He will review it and possibly change some things, for example by adjusting inner padding etc. in order to guarantee overall quality.
1. Remove unnecessary code inside the SVG:
   - a. `data-name="Layer 2"` # layer info for vector drawing software
   - b. `<path fill="#fff" d="M0 0h96v96H0z"/>` # outer bounding box filled with white background
1. - a. use the internal [svgo](https://github.com/svg/svgo) -invoking script `npm run build-images` from the materials-folder itself to clean up and optimize the SVGs, then copy the optimized files back from the `.tmp` folder to `images-raw`
   - b. alternatively use the [online SVG optimizer](https://jakearchibald.github.io/svgomg/) for the same purpose
1. Manually review the SVGs produced in the last step: add or edit &lt;path&gt; attributes, setting `fill="currentColor"` and/or `strokes="currentColor"` as appropriate. Remove unnecessary attributes.
1. Run `npm run build` to generate a js file for each svg file found. The generated files can be found in the `images` folder.

### Updating materials (UNIX only)

All our icons in the "icons" section are the material icons from google (and nothing else). To update the material icons from google (https://github.com/google/material-design-icons/releases), follow these steps.

1. Remove the contents of the `icons-raw` folder.
1. Download the newest version of material icons as a ZIP file to your download folder.
1. Extract the material icons zip file into the downloads folder.
1. Rename the extracted folder to `material-design-icons`.
1. Open a terminal and `cd` into the materials root folder (`src/components/00-materials/`).
1. Run `sh material-importer.sh`.
1. Run a search on only the folder `src/components/00-materials/icons-raw` and search for `<path` (whitespace at the end).
1. Replace all occurences with `<path fill="currentColor"` (whitespace at the end).
1. Run a search on only the folder `src/components/00-materials/icons-raw` and search for `<circle` (whitespace at the end).
1. Replace all occurences with `<circle fill="currentColor"` (whitespace at the end).

Done. This seems to be the fastest and most efficient approach with the current importer script.
