# ReactJs

# Git Commands

# Configure Git

## git config --global user.name "Your name"
## git config --global user.email "432236+user@users.noreply.github.com"

# Note: Email (432236+user@users.noreply.github.com provided by github present at

https://github.com/settings/emails

# To verify configuration

## git config --list



# 1. Initializing Git Repository in the project Folder

## git init

# 2. All all changes

## git add .

# 3. Git to link it with the remote repository

## git remote add origin repo-url

# 4. Commit Changes

## git commit -m 'initial commit'

# 5. Push the commit to Remote Repository Master branch

## git push -u origin master

# Other Commands:

# 1. Create branch and checkout to new branch

## git checkout -b Branch Name

# 2. Push to the Branch 

## git push -u origin Branch Name

# 3. List branch

## git branch

# Git Status

## git status

# 4. Git Log

## git log

# 5. Delete branch

## To delete local branch

### first switch to master

## git checkout master

### the delete local

## git branch -d BranchName

### to delete remote branch

## git push --delete origin BranchName
