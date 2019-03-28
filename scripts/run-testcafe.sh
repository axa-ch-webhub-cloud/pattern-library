#!/bin/bash
npx start-storybook -p 9999 -c .storybook -s ../src/static --ci --quiet > /dev/null 2>&1 &

npx wait-on http://localhost:9999

npx testcafe "chrome:headless" **/*test.ui.js
test_status=$?

# Kill storybook (cleanup) - By port
kill -9 $(lsof -t -i:9999 -sTCP:LISTEN)

exit $test_status
