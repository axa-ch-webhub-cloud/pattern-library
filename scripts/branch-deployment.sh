#!/bin/bash
#
# This script waits for pipeline builds and deploys them to the "github pages" of plib-feature repository that can be found here: 
# As soon as a branch gets deleted, the script will also remove that specific branch from the deployed github pages.
#
# External environment variables: $GITHUB_TOKEN, $PR_SOURCE_BRANCH_NAME, $SOURCE_BRANCH_NAME

# Check that the needed evnironment variables are present
if [[ -z "$BRANCH_NAME"]]; then
  echo "Env variable 'BRANCH_NAME' was not correctly provided."
  exit 1
elif [[ -z "$GITHUB_TOKEN" ]]; then
  echo "Env variable 'GITHUB_TOKEN' was not provided."
  exit 1
fi

echo "Using Github Email: $GITHUB_EMAIL"
echo "Using Github User:  $GITHUB_USER"

rm -rf ./dist

mkdir ./dist
git clone https://$GITHUB_TOKEN@github.com/axa-ch-webhub-cloud/plib-feature.git --depth 1 ./dist

rm -rf ./dist/$BRANCH_NAME/
mkdir -p ./dist/$BRANCH_NAME
mv -v ./storybook-static/* ./dist/$BRANCH_NAME/

# Done! From here, everything would be ready to be committed and pushed. But
# outdated branches need to be cleaned up too, so...

# List only remote branches
ALL_BRANCHES=$(git --no-pager branch -a -r)

cd ./dist

# Find all folders for 2 levels down, ignore .git folder and cut './' at the beginning of each folder
[[ $BRANCH_NAME == "develop" || $BRANCH_NAME == "master" ]] && MAX_DEPTH=1 || MAX_DEPTH=2
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

# Outdated branches are removed at this point, and the current branch is up to
# date. Ready to publish!

git add .
git commit -m "Deploy Branch: $BRANCH_NAME"
git push -f

# Move everything back to not mess with the other tasks.
cd ..
mv -v ./dist/$BRANCH_NAME/* ./storybook-static/
