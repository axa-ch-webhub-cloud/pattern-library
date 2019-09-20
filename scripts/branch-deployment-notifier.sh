#!/bin/bash

# Do not forget to have the $SLACK_TOKEN as environment variable
echo $SLACK_TOKEN
slackhost=axa-ch
channel=plib-deployments

text="$BRANCH_NAME was deployed here: https://axa-ch.github.io/plib-feature/$BRANCH_NAME"
escapedText=$(echo $text | sed 's/"/\"/g' | sed "s/'/\'/g" )

curl -X POST -H "Content-type: application/json;charset=UTF-8" -H "Authorization: Bearer $SLACK_TOKEN" -d "{\"channel\":\"#plib-deployments\", \"text\": \"$escapedText\", \"username\": \"Donald Duck\"}" https://slack.com/api/chat.postMessage