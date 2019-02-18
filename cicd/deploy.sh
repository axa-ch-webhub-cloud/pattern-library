# TODO this script contains some anchor points and should be adapted, as soon as a deployable artifact is available.

# This file is currently just a prototype that does not work.
# git clone https://github.com/axa-ch/patterns-library.git --branch $TRAVIS_BRANCH --single-branch --depth 1
# cd patterns-library
# npm run build
# mkdir docs
# cd docs
# git clone https://github.com/axa-ch/patterns-library.git --branch gh-pages --single-branch --depth 1
# cd patterns-library
# rm -rf $TRAVIS_BRANCH # Remove folder with outdated deployment artifact, if there is any
# mkdir $TRAVIS_BRANCH # Recreate for update deployment artifact
# mv -v ../docs patterns-library/$TRAVIS_BRANCH
# cd patterns-library
# git add *
# git commit -m "Update docs for branch ${TRAVIS_BRANCH}"
# git push -f origin master
