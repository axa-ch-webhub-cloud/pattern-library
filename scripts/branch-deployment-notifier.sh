#!/bin/bash

# External environment variables: $SLACK_TOKEN, $BRANCH_NAME

text="$BRANCH_NAME was deployed here: https://axa-ch.github.io/plib-feature/$BRANCH_NAME"

curl -X POST -H "Content-type: application/json;charset=UTF-8" -H "Authorization: Bearer $SLACK_TOKEN" -d "{\"channel\":\"#plib-deployments\", \"text\": \"$text\", \"username\": \"Donald Duck\"}" https://slack.com/api/chat.postMessage