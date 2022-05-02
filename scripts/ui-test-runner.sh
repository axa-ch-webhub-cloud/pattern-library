#!/bin/bash

# Import environment variables from .env file
export $(egrep -v '^#' .env.defaults | xargs) > /dev/null 2>&1
export $(egrep -v '^#' .env | xargs) > /dev/null 2>&1

echo "Running Storybook on address '$TEST_HOST_STORYBOOK_URL' and on port '$TEST_HOST_STORYBOOK_PORT'"

npx start-storybook -p $TEST_HOST_STORYBOOK_PORT -c .storybook -s ./src/static --ci  &
npx wait-on $TEST_HOST_STORYBOOK_PATH -t 120000 && echo "Storybook ready for testing"

### Start playwright tests
npx jest --config=jest.ui.config.js
### End playwright tests

test_status=$?

if [ $test_status = 1 ]; then
    # Kill storybook (cleanup) - By port
    kill -9 $(lsof -t -i:$TEST_HOST_STORYBOOK_PORT -sTCP:LISTEN)
    exit 1;
fi


### Start testcafe tests
NUM_CPUS=$(python -c 'import multiprocessing as mp; print(mp.cpu_count())')
if [ -z "$1" ]
then
    npx testcafe -c ${NUM_CPUS} "chrome:headless" -q ./**/ui.test.js
else
    npx testcafe -F "${1}" -c ${NUM_CPUS} "chrome:headless" -q ./**/ui.test.js
fi
### End testcafe tests

test_status=$?

# Kill storybook (cleanup) - By port
kill -9 $(lsof -t -i:$TEST_HOST_STORYBOOK_PORT -sTCP:LISTEN)

exit $test_status
