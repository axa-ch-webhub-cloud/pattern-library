#!/bin/bash
mkdir -p ./dist/$BRANCH_NAME
mv -v ./storybook-static/* ./dist/$BRANCH_NAME/
npm run deploy-storybook -- --ci --host-token-env-variable=$GITHUB_TOKEN --remote=https://github.com/raphaellueckl/feature-branch-deployments.git --existing-output-dir=./dist
