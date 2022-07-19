#!/usr/bin/env sh

echo $'\342\232\231' Working... $'\342\232\231'
# abort on errors
set -e

# build
git checkout gh-pages
git pull origin main

npm run build

git add .
git commit -m 'auto-deploy'
git push origin gh-pages

echo $'\342\232\231' Deployment Finished $'\342\232\231'
echo $'\360\237\220\247': Check it out: https://jamesonarnett.github.io/terminal