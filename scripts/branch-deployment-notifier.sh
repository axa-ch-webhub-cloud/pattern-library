#!/bin/bash

# Do not forget to have the $SLACK_TOKEN as environment variable
slackhost=axa-ch
channel=plib-deployments

text="$BRANCH_NAME was deployed here: https://axa-ch.github.io/plib-feature/$BRANCH_NAME"

escapedText=$(echo $text | sed 's/"/\"/g' | sed "s/'/\'/g" )
json="{\"channel\": \"#$channel\", \"text\": \"$escapedText\"}"

curl -s -d "payload=$json" "https://$slackhost.slack.com/services/hooks/incoming-webhook?token=$SLACK_TOKEN"