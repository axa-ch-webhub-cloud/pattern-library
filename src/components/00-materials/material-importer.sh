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
# find ~/Downloads/material-design-icons -type f -name "*_24px.svg" -and \( -name "*ic*" \)
# ALL_ICONS=$(find $MATERIAL_ICONS_LOCATION -type f -name "*_24px.svg" -and \( -name "*/production/*" \))
ALL_ICONS=$(find $MATERIAL_ICONS_LOCATION -type f -name "*_24px.svg")
ICON_DIR=./icons-raw/

mkdir -p $ICON_DIR

# IFS makes it possible to loop over each line of the output
(IFS='
'
for x in $ALL_ICONS; do
    # Use only optimized production svgs.
    if [[ $x == *"/production/"* ]]; then
        echo "Copy file: $x"
        #   mv -v $x $ICON_DIR
        cp -f $x $ICON_DIR
    fi
done)
