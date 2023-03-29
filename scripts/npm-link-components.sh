#!/bin/bash
###############################################################################
# This script will 'npm link' all components that we have in the pattern      #
# library. Run it with 'sh ./scrips/npm-link-all.sh'.                         #
# After running the script, use any component that you want to test anywhere  #
# on your system like this: 'npm link @axa-ch-webhub-cloud/footer' (or whichever           #
# component you want to test).                                                #
# This will make the build folder of every component available anywhere on    #
# your file system and will link it directly in the node_modules folder of    #
# wherever you are testing it.                                                 #
###############################################################################

# All pattern library components' relative path will be stored in this array.
declare -a ALL_COMPONENTS

# IFS allows us to loop over all lines of a command's output.
(IFS='
'
# Find all package.json files, ignore all node_modules folders in the search.
# Copy only the path of the parent directory.
for x in $(find ./src -name "package.json" -not -path "*/node_modules/*")
do
    ALL_COMPONENTS+=($(dirname $x))
done

# Loop over all found directories.
for component_path in ${ALL_COMPONENTS[@]}
do
  cd $component_path
  # Make the component available via symlink.
  npm link

  # Check the amount of slashes within the relative path.
  number_of_slashes=$(awk -F"/" '{print NF-1}' <<< "${component_path}")

  # CD back for the amount of found slashes, to start again for the next component.
  for (( c=1; c<=$number_of_slashes; c++ ))
  do
    cd ..
  done

done
)
