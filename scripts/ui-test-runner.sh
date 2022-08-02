#!/bin/bash

NUM_CPUS=$(node -e 'console.log(require("os").cpus().length)')

START_SB_STATIC="http-server storybook-static -s -p 9999"
RUN_PLAYWRIGHT="cross-env SB_URL=http://localhost:9999 playwright test"
RUN_TESTCAFE="cross-env TEST_HOST_STORYBOOK_URL=http://localhost:9999 testcafe -c ${NUM_CPUS} "chrome:headless" -q ./**/ui.test.js"

npx concurrently -k -s first -n "SB,TEST" -c "magenta,blue" "${START_SB_STATIC}" "wait-on tcp:9999 && ${RUN_PLAYWRIGHT} && ${RUN_TESTCAFE}"
