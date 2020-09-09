#!/bin/bash
NUM_CPUS=$(python -c 'import multiprocessing as mp; print(mp.cpu_count())')

# Import environment variables from .env file
export $(egrep -v '^#' .env.defaults | xargs) > /dev/null 2>&1
export $(egrep -v '^#' .env | xargs) > /dev/null 2>&1

npx start-storybook -p $TEST_HOST_STORYBOOK_PORT -c .storybook -s ./src/static --ci --quiet > /dev/null 2>&1 &
npx wait-on $TEST_HOST_STORYBOOK_URL -t 30000

if [ -z "$1" ]
then
    npx testcafe -c ${NUM_CPUS} "chrome:headless" -q ./**/ui.test.js
else
    npx testcafe -F "${1}" -c ${NUM_CPUS} "chrome:headless" -q ./**/ui.test.js
fi

test_status=$?

# Kill storybook (cleanup) - By port
kill -9 $(lsof -t -i:$TEST_HOST_STORYBOOK_PORT -sTCP:LISTEN)

exit $test_status
