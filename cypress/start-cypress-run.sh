#!/bin/bash

# npm run storybook &
npx start-storybook -p 9999 -c .storybook -s ../src/static > /dev/null 2>&1 &

npx wait-on http://localhost:9999

npm run cy
SUCCESS=$?

# Kill storybook (cleanup) - By port
kill -9 $(lsof -t -i:9999 -sTCP:LISTEN)

exit $SUCCESS
