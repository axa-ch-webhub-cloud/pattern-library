#!/bin/bash
mkdir ./dist
git clone https://github.com/raphaellueckl/feature-branch-deployments.git ./dist
mkdir -p ./dist/$BRANCH_NAME
mv -v ./storybook-static/* ./dist/$BRANCH_NAME/
cd ./dist
git add *
git commit -m "Deploy Branch: ${BRANCH_NAME}"
git push

# git clone https://github.com/raphaellueckl/feature-branch-deployments.git --depth 1
# cd feature-branch-deployments
ALL_BRANCHES=$(git --no-pager branch -a $1)
ALL_FOLDERS_DEPTH_1=$(find . -type d -maxdepth 2 -path ./.git -prune -o -print | cut -d '/' -f2-)

(IFS='
'
for x in $ALL_BRANCHES; do echo $x; done)

# Cleanup
cd ..
mv -v ./dist/$BRANCH_NAME/* ./storybook-static/