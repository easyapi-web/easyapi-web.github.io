#!/bin/sh
#
echo build...
npm run ydoc-build
echo copy to outside
echo `pwd`
cp -r /home/travis/build/easyapi-web/easyapi-web.github.io/_site/* /home/travis/build/easyapi-web/easyapi-web.github.io/
git add .