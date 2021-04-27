#!/bin/bash
npm whoami
npx lerna clean
npm ci
npm run test
npx lerna version --exact
npx cross-env NODE_ENV=production npm run build-components
lerna publish from-package
git clean -dfxq -e .idea -e .vscode
npm install
git add *
git commit -m 'release: update package locks'
git push
