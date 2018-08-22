## Intro

This is a script written by [shelljs](https://github.com/shelljs/shelljs).

## Purpose 

Since each time microapp-frontend-base updated, we need to update serveral microapps,
here is a more efficient way to batch update refrences of microapp-frontend-base in microapps.

## What does the script do

1. `cd ${repo set in config file}`
2. `git stash && git checkout master && git pull origin master`
3. `git checkout -b ${ branchName set in config file}` or `git checkout ${ branchName set in config file}`
4. `yarn remove microapp-frontend-base && yarn add ${ frontendRepoAuthUrl set in config file}`
5. `git add package.json && git add yarn.lock`
6. `git commit -m "${ commitInfo set in config file}"`
7. `git push origin ${ branchName }`

## How to set config file

See explainations in config/config.tmp.js

## How to Use
1. Clone this repo.
2. Open terminal and go into the directory of this repo.
3. Run `npm install`.
4. Run `make init_config` to init config file.
5. Modify the config file as your like.
6. Run `make update_all` to update microapps.

