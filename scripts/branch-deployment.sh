#!/bin/bash

# External environment variables: $GITHUB_TOKEN, $PR_SOURCE_BRANCH_NAME, $SOURCE_BRANCH_NAME

# If the PR_SOURCE_BRANCH_NAME contains a $ char, the variable could not be resolved, which means,
# that the build does not originate form a pull request. In that case, we go after the branch name.
# This is an issue with azure, that the source_branch contains whatever reference, but the actual
# source branch that we would be interested in.
[[ $PR_SOURCE_BRANCH_NAME != *"$"* ]] && BRANCH_NAME="$PR_SOURCE_BRANCH_NAME" || BRANCH_NAME="$SOURCE_BRANCH_NAME"
echo "PR-Source-Branch-Name:              $PR_SOURCE_BRANCH_NAME"
echo "Source-Branch-Name:                 $SOURCE_BRANCH_NAME"
echo "Branch name that will be deployed:  $BRANCH_NAME"

mkdir ./dist
git clone https://$GITHUB_TOKEN@github.com/axa-ch/plib-feature.git --depth 1 ./dist

rm -rf ./dist/$BRANCH_NAME/
mkdir -p ./dist/$BRANCH_NAME
mv -v ./storybook-static/* ./dist/$BRANCH_NAME/

# List only remote branches
ALL_BRANCHES=$(git --no-pager branch -a -r)

cd ./dist

# Find all folders for 2 levels down, ignore .git folder and cut './' at the beginning of each folder
[[ $BRANCH_NAME = "develop" || $BRANCH_NAME = "master" ]] MAX_DEPTH=1 || MAX_DEPTH=2
ALL_FOLDERS_DEPTH_1=$(find . -maxdepth $MAX_DEPTH -not -path "./.*" -type d | cut -d '/' -f2-)

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
      echo "Removing no longer existing branch: $x"
      rm -rf $x || echo "Could not remove $x"
    fi
done)

git config --global user.email "raphael.lueckl@axa.ch"
git config --global user.name "Donald Duck"
git add .
git commit -m "Deploy Branch: $BRANCH_NAME"
git push -f

# Move everything back to not mess with the other tasks.
cd ..
mv -v ./dist/$BRANCH_NAME/* ./storybook-static/