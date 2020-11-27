#!/bin/bash

# Import environment variables from .env file
export $(egrep -v '^#' .env.defaults | xargs) > /dev/null 2>&1
export $(egrep -v '^#' .env | xargs) > /dev/null 2>&1

echo "Running Storybook on address '$TEST_HOST_STORYBOOK_URL' and on port '$TEST_HOST_STORYBOOK_PORT'"

npx start-storybook -p $TEST_HOST_STORYBOOK_PORT -c .storybook -s ./src/static --ci --quiet > /dev/null 2>&1 &
npx wait-on $TEST_HOST_STORYBOOK_URL -t 30000

sh ./scripts/test-playwright.sh

if [ $? = 1 ]; then
    # Kill storybook (cleanup) - By port
    kill -9 $(lsof -t -i:$TEST_HOST_STORYBOOK_PORT -sTCP:LISTEN)
    exit 1;
fi

sh ./scripts/test-testcafe.sh

test_status=$?

# Kill storybook (cleanup) - By port
kill -9 $(lsof -t -i:$TEST_HOST_STORYBOOK_PORT -sTCP:LISTEN)

exit $test_status
