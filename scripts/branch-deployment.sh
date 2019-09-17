#!/bin/bash
BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)
mkdir ./dist
git clone https://github.com/raphaellueckl/feature-branch-deployments.git --depth 1 ./dist
mkdir -p ./dist/$BRANCH_NAME
mv -v ./storybook-static/* ./dist/$BRANCH_NAME/

# List only remote branches
ALL_BRANCHES=$(git --no-pager branch -a -r)

cd ./dist

# Find all folders for 2 levels down, ignore .git folder and cut './' at the beginning of each folder
ALL_FOLDERS_DEPTH_1=$(find . -type d -maxdepth 2 -path ./.git -prune -o -print | cut -d '/' -f2-)

###################################################################################################
# There is one issue with the loop below: It checks the branch names on the pattern-library-repo. #
# But if somebody creates a branch called 'feature/a', it is likely that it will never (or way    #
# too late) gets deleted, because we check 'in all pattern library branches, is this branch name  #
# contained'. If no, we clean it up because we no longer need it (because the branch probably got #
# merged and deleted). As long as we have another branch open that starts with 'feature/a', the   #
# oudated branch will not be removed.                                                             #
#                                                                                                 #
# tl;dr:                                                                                          #
# 'feature/a' will not be deleted, as long as something like 'feature/axa-button-fix-bug' exists, #
# although it should.                                                                             #
###################################################################################################
# IFS makes it possible to loop over each line of the output
(IFS='
'
for x in $ALL_FOLDERS_DEPTH_1; do
    # If folder is no longer linked to a remote branch, remove it.
    if [[ $ALL_BRANCHES != *"$x"* ]]; then
      rm -rf $x
    fi
done)

git add .
git commit -m "Deploy Branch: ${BRANCH_NAME}"
git push

# Move everything back to not mess with the other tasks.
cd ..
mv -v ./dist/$BRANCH_NAME/* ./storybook-static/