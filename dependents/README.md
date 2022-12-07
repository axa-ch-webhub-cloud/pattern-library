# Dependents

Analyse and generate data to answer the following questions:

- Who uses plib webcomponents
- Who uses plib react components
- Who uses plib native iife component
- Who uses plib obsolete polyfill
- Which plib components versions are used
- Who uses Typescript

## Scripts

- npm run `create-data`
  - create `./data/dependents.json`
- npm run `update-deps`
  - Update all dependencies in the `package.json` depends on the `dependents.json` data
- npm run `analyse-dependents`
  - (0) initial `npm i`
  - (1) create data with `npm run create-data`
  - (2) Then update dependencies `npm run update-deps`
  - (3) Install all dependents `npm i` at the moment only possible with `node 14`
  - (4) Finally run npm run `analyse-dependents` to create the analyse data

## dependents-analyse.json structure

```js
[
  {
    name: string,
    usePolyfill: boolean,
    useWebcomponents: boolean,
    useReact: boolean,
    useNativeIife: boolean,
    useTypescript: boolean,
    components: {
      x: string,
    },
  },
];
```
