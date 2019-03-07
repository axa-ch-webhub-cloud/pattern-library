#!/bin/bash
npm run storybook &

npx wait-on http://localhost:9001

npm run cy
# Kill storybook (cleanup) - By port
kill -9 $(lsof -t -i:9001 -sTCP:LISTEN)

echo "done"