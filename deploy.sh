#!/usr/bin/env sh

# abort on errors
set -e

# build
git checkout gh-pages
git pull origin main

npm run build

git add .
git commit -m 'auto-deploy'
git push origin gh-pages

echo 'Deployed'
echo "$'\360\237\220\247' Check it out: https://jamesonarnett.github.io/terminal"