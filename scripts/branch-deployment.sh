#!/bin/bash
mkdir -p ./dist/$BRANCH_NAME
mv -v ./storybook-static/* ./dist/$BRANCH_NAME/
npm run deploy-storybook -- --ci --host-token-env-variable=$GITHUB_TOKEN --remote=https://github.com/raphaellueckl/feature-branch-deployments.git --existing-output-dir=./dist

git clone https://github.com/raphaellueckl/feature-branch-deployments.git --depth 1
cd feature-branch-deployments
ALL_BRANCHES=$(git --no-pager branch -a)
ALL_FOLDERS_DEPTH_1=$(find . -type d -maxdepth 2 | cut -d '/' -f2-)

