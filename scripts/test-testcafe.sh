#!/bin/bash

NUM_CPUS=$(python -c 'import multiprocessing as mp; print(mp.cpu_count())')
if [ -z "$1" ]
then
    npx testcafe -c ${NUM_CPUS} "chrome:headless" -q ./**/ui.test.js
else
    npx testcafe -F "${1}" -c ${NUM_CPUS} "chrome:headless" -q ./**/ui.test.js
fi

exit $?
