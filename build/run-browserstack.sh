#!/bin/bash

# Import environment variables from .env file
export $(egrep -v '^#' .env | xargs)

npx start-storybook -p 9999 -c .storybook -s src/static --ci --quiet > /dev/null 2>&1 &

npx wait-on http://localhost:9999

# Run tests on browserstack with the latest internet explorer (11)
npx testcafe \"browserstack:ie:Windows 10\" tests/
test_status=$?

# Kill storybook (cleanup) - By port
kill -9 $(lsof -t -i:9999 -sTCP:LISTEN)

exit $test_status
