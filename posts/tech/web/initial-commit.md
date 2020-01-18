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


## Generating a new ssh key (One time only)

Execute the following command in the terminal

`ssh-keygen`

## Cloning the git project in local system

1. Go to the project in Github, choose ssh (There will be HTTPS and ssh) and copy the ssh path

2. Give the following command in git bash in your system-

git clone git@github.com:seomun19/jsDrome.git

3. Give pwd to know the location of the cloned folder

4. In the latest vscode it comes with built in terminal

## Opening the cloned git folder in vs code

1. In vscode goto File menu, open folder and open the folder where you cloned the repository (Earlier pwd would have told you the path in step-3 above)

2. Open a new terminal in vscode- In terminal "Select default shell" and choose git bash

3. Close terminal and open it again

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
