#!/bin/bash
# 
# This script creates a message for the slack channel #plib-deployments, containing the location
# of the deployed branch.
#
# External environment variables: $SLACK_TOKEN, $BRANCH_NAME

# If the PR_SOURCE_BRANCH_NAME contains a $ char, the variable could not be resolved, which means,
# that the build does not originate form a pull request. In that case, we go after the branch name.
# This is an issue with azure, that the source_branch contains whatever reference, but the actual
# source branch that we would be interested in.
[[ -z "$PR_SOURCE_BRANCH_NAME" || $PR_SOURCE_BRANCH_NAME == *"$"* ]] && BRANCH_NAME="$SOURCE_BRANCH_NAME" || BRANCH_NAME="$PR_SOURCE_BRANCH_NAME"

text="\`$BRANCH_NAME\` was deployed here: https://axa-ch-webhub-cloud.github.io/plib-feature/$BRANCH_NAME/"

curl -X POST -H "Content-type: application/json;charset=UTF-8" -H "Authorization: Bearer $SLACK_TOKEN" -d "{\"channel\":\"#plib-deployments\", \"text\": \"$text\", \"username\": \"Donald Duck\", \"icon_url\": \"https://avatars2.githubusercontent.com/u/55502240?s=400&v=4\"}" https://slack.com/api/chat.postMessage
