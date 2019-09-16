#!/bin/bash
mkdir ./dist
git clone https://github.com/raphaellueckl/feature-branch-deployments.git ./dist
mkdir -p ./dist/$BRANCH_NAME
mv -v ./storybook-static/* ./dist/$BRANCH_NAME/

ALL_BRANCHES=$(git --no-pager branch -a -r) # List only remote branches

cd ./dist

# git clone https://github.com/raphaellueckl/feature-branch-deployments.git --depth 1
# cd feature-branch-deployments

# Find all folders for 2 levels down, ignore .git folder and cut './' at the beginning of each folder
ALL_FOLDERS_DEPTH_1=$(find . -type d -maxdepth 2 -path ./.git -prune -o -print | cut -d '/' -f2-)

###################################################################################################
# There is one issue with the loop below: It checks the branch names on the pattern-library-repo. #
# But if someby creates a branch called 'feature/a', it is likely that it never (or way too late) #
# will get deleted, because we check 'in all our branches, is this branch name contained'. If no, #
# we clean it up because we no longer need it. As long as we have another branch open that starts #
# with 'feature/a', the oudated branch will not be removed.                                       #
#                                                                                                 #
# tl;dr:                                                                                          #
# 'feature/a' will not be deleted, as long as something like 'feature/axa-button-fix-bug' exists, #
# although it should.                                                                             #
###################################################################################################
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