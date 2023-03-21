#!/usr/bin/env sh
###
 # @Descripttion: ''
 # @version: ''
 # @Author: 周涛
 # @Date: 2023-03-21 23:43:23
 # @LastEditors: 周涛
 # @LastEditTime: 2023-03-22 00:07:17
### 
 
# sh deploy.sh

# abort on errors
set -e
 
# build
npm run build
 
# navigate into the build output directory
cd dist
 
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
 
git init
git add -A
git commit -m 'deploy'
 
# if you are deploying to https://<USERNAME>.github.io
# git push -f git@atao.github.com:atao89/vue2-pro.github.io.git master
 
# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@atao.github.com:atao89/vue2-pro.git master:gh-pages
 
cd -