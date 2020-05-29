[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Netlify Status](https://api.netlify.com/api/v1/badges/acef601f-d186-458f-8e2e-787ce585bc4a/deploy-status)](https://app.netlify.com/sites/axa-design-system/deploys)

# AXA Design System

> Branding design

## Tooling

- The pages are generated with `Gatsby`
- `postcss` for the design
- Hosted on netlify, you [can check the demo](https://axa-design-system.netlify.app/)

## Getting started

```console
npm install
npm start
```

You can now view docs in the browser http://localhost:8000/
⠀
View GraphiQL, to explore your site's data and schema http://localhost:8000/___graphql
⠀
## Deploy

Note that the development build is not optimized.
To create a production build, use `gatsby build`

```
npm run build
```

Deploy a version to [https://axa-design-system.netlify.app/](https://axa-design-system.netlify.app/)

```console
git push origin develop
```

## Create a new page compoent workflow

🔥 Don't break the SSR rendering (Find documention on how [Debugging HTML Builds](https://www.gatsbyjs.org/docs/debugging-html-builds/))

- [ ] Go and search on https://patterns.axa.ch
- [ ] Install from `@axa-ch/whatever` with `npm install @axa-ch/whatever`
- [ ] Create the React-ified version on `src/patterns/reactified/Whatever.tsx`
- [ ] export it with `@loadable/component` from `src/patterns/reactified/index.tsx`
- [ ] `import { Whatever } from '../patterns/';`
- [ ] You are ready to use it with `<Whatever />`

| Component name                         | Component variations        | Component type | 🇨🇭 Pattern Code |
| -------------------------------------- | --------------------------- | -------------- | --------------- |
| Logo                                   | Solid/Open                  | Constant       | 🌀              |
| Icons                                  | Illustrative                | Constant       | 🌀              |
|                                        | Functional                  | Constant       | 🌀              |
| Spacing                                |                             | Constant       | 🔴              |
| Grids                                  |                             | Constant       | 🔴              |
| Colors                                 |                             | Constant       | ✅              |
| -------------------------------------- | --------------------------- | -------------- | --------------- |
| Buttons                                | Primary/Secondary           | Atom           | ✅              |
|                                        | Ghost                       | Atom           | 🌀              |
| Image                                  |                             | Atom           | 🔴              |
| Typography                             | Heading                     | Atom           | ✅              |
| Typography                             | Text                        | Atom           | ✅              |
| Links                                  | Hyperlinks / Simple links   | Atom           | ✅              |
| Form container                         |                             | Atom           | 🔴              |
| Input                                  | Text / Password             | Atom           | ✅              |
| Input                                  | Date                        | Atom           | 🔴              |
| Input                                  | Range (slider)              | Atom           | 🔴              |
| Checkbox                               |                             | Atom           | ✅              |
| Radio                                  |                             | Atom           | ✅              |
| Social Media                           |                             | Atom           | 🔴              |
| -------------------------------------- | --------------------------- | -------------- | --------------- |
| Text Image                             | TextImage/Left_LargeImage   | Molecule       | 🔴              |
|                                        | TextImage/Right_LargeImage  | Molecule       | 🔴              |
|                                        | TextImage/Slider            | Molecule       | 🔴              |
|                                        | TextImage/ColoredBackground | Molecule       | 🔴              |
| Header                                 | Main Navigation             | Molecule       | 🌀              |
|                                        | Meta Navigation             | Molecule       | 🌀              |
|                                        | Sub-navigation              | Molecule       | 🌀              |
| Footer                                 |                             | Molecule       | ✅              |
| MultipleEntries                        | Background White/Blue       | Molecule       | 🔴              |
|                                        | 3 / 4 columns               | Molecule       | 🔴              |
| Data-visualisation/KeyFigures          |                             | Molecule       | ?               |
| Banner/SecondaryPalette/Text-couloured |                             | Molecule       | ?               |
| Interstitial/TextCTA                   |                             | Molecule       | ?               |
| Datepicker                             |                             | Molecule       | ✅              |
| Dropdown (Select)                      |                             | Molecule       | ✅              |
|                                        | Multiple choice buttons     | Molecule       | ?               |
| Contextual help                        |                             | Molecule       | 🔴              |
| Tabs                                   |                             | Molecule       | 🔴              |
| subMenu                                |                             | Molecule       | 🔴              |
| Cookie Disclaimer                      |                             | Molecule       | ✅              |
| -------------------------------------- | --------------------------- | -------------- | --------------- |
| Table                                  |                             | Organism       | ✅              |
| Table Sortable                         |                             | Organism       | ✅              |
| Commercial Hero Banner                 |                             | Organism       | ✅              |
| Navigation Menu                        |                             | Organism       | 🔴              |
| Short Page                             |                             | Organism       | 🔴              |
| Form Page                              |                             | Organism       | 🔴              |

✅ Yes
🔴 No
🌀 Almost
? No idea what is it
