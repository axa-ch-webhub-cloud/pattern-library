#!/bin/bash
#
# ==================================================
# Import all google material icons with this script.
# ==================================================
#
# Customize the "MATERIAL_ICONS_LOCATION" path if you have to, then simply run
# "sh material-importer.sh" from within the folder that is containing this
# script.
#

MATERIAL_ICONS_LOCATION=~/Downloads/material-design-icons
ALL_ICONS=$(find $MATERIAL_ICONS_LOCATION -type f -name "*_24px.svg")
ICON_DIR=./icons-raw/
STRING_TO_REMOVE_1="_24px"
STRING_TO_REMOVE_2="ic_"

mkdir -p $ICON_DIR

# IFS makes it possible to loop over each line of the output
(IFS='
'
for x in $ALL_ICONS; do
    # Use only optimized production svgs.
    if [[ $x == *"/production/"* ]]; then
        # echo "Copy file: $x"
        OPTIMIZED_FILENAME=$(printf '%s\n' "${x//$STRING_TO_REMOVE_1/}")
        OPTIMIZED_FILENAME=$(printf '%s\n' "${OPTIMIZED_FILENAME//$STRING_TO_REMOVE_2/}")
        cp -f $x $OPTIMIZED_FILENAME
        mv -v $OPTIMIZED_FILENAME $ICON_DIR
        # cp -f $OPTIMIZED_FILENAME $ICON_DIR
        #   mv -v $x $ICON_DIR
    fi
done)
