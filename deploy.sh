#!/usr/bin/env sh

# abort on errors
set -e

# build
git checkout gh-pages

npm run build

git add -A
git commit -m 'auto-deploy'
git push origin gh-pages