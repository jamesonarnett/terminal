#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into build output
cd dist

#git
git checkout gh-pages
git add -A
git commit -m 'auto-deploy'
git push

cd -