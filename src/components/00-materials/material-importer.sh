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
ALL_ICONS=$(find $MATERIAL_ICONS_LOCATION -type f -name "24px.svg")
ICON_DIR=./icons-raw/
STRING_TO_REMOVE="24px"

mkdir -p $ICON_DIR

# IFS makes it possible to loop over each line of the output
(IFS='
'
for x in $ALL_ICONS; do
     # echo "Copy file: $x"
     PARENT_FOLDER_PATH=${x%/*}
     PARENT_FOLDER_NAME=${PARENT_FOLDER_PATH##*/}

     ICON_FOLDER_PATH=${PARENT_FOLDER_PATH%/*}
     ICON_NAME=${ICON_FOLDER_PATH##*/}

         if [[ $PARENT_FOLDER_NAME == "materialiconsoutlined" ]]; then
               ICON_NAME_OUTLINED="${ICON_NAME}_outlined"
               OPTIMIZED_FILENAME=$(printf '%s\n' "${x//$STRING_TO_REMOVE/$ICON_NAME_OUTLINED}")
         fi
         if [[ $PARENT_FOLDER_NAME == "materialicons" ]]; then
               OPTIMIZED_FILENAME=$(printf '%s\n' "${x//$STRING_TO_REMOVE/$ICON_NAME}")
         fi

     cp -f $x $OPTIMIZED_FILENAME
     mv -v $OPTIMIZED_FILENAME $ICON_DIR

     # cp -f $OPTIMIZED_FILENAME $ICON_DIR
     #   mv -v $x $ICON_DIR
done)
