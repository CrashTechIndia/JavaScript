# JavaScript
Playing with JS like never before in a collated repoistory, making it a one stop shop

##initial commit fom local


### add the remote
`git remote add origin https-//github.com/CrashTechIndia/JavaScript.git`

### checkout to master
`git checkout origin master`

### create a local branch from master:
`git checkout -b dev/javascript`

### enable tracking for the newly created branch: 
`git push --set-upstream origin dev/javascript`
or,
`git push --set-upstream https://github.com/CrashTechIndia/JavaScript.git dev/javascript`


## steps to pushing your code

### add/stage all changes
`git add --all`

### Commit all staged changes
`git commit -m "initial commit fomr local"`

### push the changes to a new branch
`git push`

### if remote branch not checked out 
`git push --set-upstream origin dev/javascript`


