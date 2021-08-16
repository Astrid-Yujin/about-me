#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A 
git commit -m "First Deployment"
git push -f git@github.com:Astrid-Yujin/about-me.git master:gh-pages

cd -
