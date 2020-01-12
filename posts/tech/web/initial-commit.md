# Initial Commit

&nbsp;

## Softwares to be installed

 - Git Bash (If you're using Windows)
 - VS Code
 - NodeJS

## Verify installations

`git --version`

`node -v`

`npm -v`

## Create a new repository in Github

Go to www.github.com

Login and create a new project. Give it a name of your choice.


## Generating ssh key

Execute the following command in the terminal

`ssh-keygen`

Copy the public key from the .pub file. if the path has spaces then it needs to be given within quotes.

`cat <path to .pub file here>`

Copy the entire public key, and go to user-settings in Github and add it as a new SSH key in user settings.

## Cloning the git project in local system

Go to the project in github, choose SSH (there will be HTTPS and SSH) and copy the SSH url of the repo.

Clone the repository. `git clone <ssh url here>`

## Intiate new nodejs project

`npm init`

## Create a .gitignore file

In the same project in vscode create a file called `.gitignore` in the same folder.

Execute: `echo node_modules > .gitignore`

Commit and push.

    git add .
    git commit -m 'feat: initial commit'
    git push --set-upstream origin master
