#!/bin/bash
mkdir ./dist
git clone https://github.com/raphaellueckl/feature-branch-deployments.git ./dist
mkdir -p ./dist/$BRANCH_NAME
mv -v ./storybook-static/* ./dist/$BRANCH_NAME/
cd ./dist

# git clone https://github.com/raphaellueckl/feature-branch-deployments.git --depth 1
# cd feature-branch-deployments
ALL_BRANCHES=$(git --no-pager branch -a -r) # List only remote branches
ALL_FOLDERS_DEPTH_1=$(find . -type d -maxdepth 2 -path ./.git -prune -o -print | cut -d '/' -f2-) # Find all folders for 2 levels down, ignore .git folder and cut './' at the beginning of each folder

# IFS makes it possible to loop over each line of the output
(IFS='
'
for x in $ALL_FOLDERS_DEPTH_1; do
    # If folder is no longer linked to a remove branch, remove it.
    if [[ $ALL_BRANCHES != *"$x"* ]]; then
      rm -rf $x
    fi
done)

git add .
git commit -m "Deploy Branch: ${BRANCH_NAME}"
git push


# Cleanup
cd ..
mv -v ./dist/$BRANCH_NAME/* ./storybook-static/