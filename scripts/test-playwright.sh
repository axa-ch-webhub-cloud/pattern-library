#!/bin/bash

npm run test-playwright --config="jest.ui.config.js"
test_result=$?

exit $test_result
