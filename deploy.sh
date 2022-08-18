#!/usr/bin/env sh

# abort on errors ¯\_(ツ)_/¯
set -e

# add some color
green='\033[0;32m'
yellow='\033[0;33m'
clear='\033[0m'

echo $'\342\232\231' "${yellow}Working...${clear}" $'\342\232\231'

# build
git checkout gh-pages
git merge main

npm run build

git add .
git commit -m 'auto-deploy'
git push origin gh-pages

echo $'\360\237\220\247' "Done: ${green}Check it out @ https://jamesonarnett.github.io/terminal${clear}"

git checkout main