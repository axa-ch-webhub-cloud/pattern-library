#!/bin/bash

npm run test-jest --config="jest.ui.config.js"
test_result=$?

exit $test_result
