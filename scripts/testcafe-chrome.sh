#!/bin/bash

# Import environment variables from .env file
export $(egrep -v '^#' .env.defaults | xargs)
export $(egrep -v '^#' .env | xargs)

npx start-storybook -p $TEST_HOST_STORYBOOK_PORT -c .storybook -s ./src/static --ci --quiet > /dev/null 2>&1 &
npx wait-on $TEST_HOST_STORYBOOK_URL -t 30000
npx testcafe -c 4 "chrome:headless" ./**/ui.test.js
test_status=$?

# Kill storybook (cleanup) - By port
kill -9 $(lsof -t -i:$TEST_HOST_STORYBOOK_PORT -sTCP:LISTEN)

exit $test_status
