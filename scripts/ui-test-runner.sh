#!/bin/bash

echo "Running Storybook on address '$TEST_HOST_STORYBOOK_URL' and on port '9999'"

npx start-storybook -p 9999 -c .storybook --ci  &
npx wait-on tcp:9999 -t 120000 && echo "Storybook ready for testing"

test_status=$?

if [ $test_status = 1 ]; then
    # Kill storybook (cleanup) - By port
    kill -9 $(lsof -t -i:9999 -sTCP:LISTEN)
    exit 1;
fi

### Start testcafe tests
NUM_CPUS=$(node -e 'console.log(require("os").cpus().length)')
if [ -z "$1" ]
then
    npx testcafe -c ${NUM_CPUS} "chrome:headless" -q ./**/ui.test.js
else
    npx testcafe -F "${1}" -c ${NUM_CPUS} "chrome:headless" -q ./**/ui.test.js
fi
### End testcafe tests

test_status=$?

# Kill storybook (cleanup) - By port
kill -9 $(lsof -t -i:9999 -sTCP:LISTEN)

exit $test_status
