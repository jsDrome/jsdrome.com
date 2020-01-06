# Initial Commit

&nbsp;

# Minimum system requirements and software to be installed
The minimum requirement for this chapter is either Windows 8 or Windows 10

1. Install gitbash in windows
2. Install vscode in windows
3. Install nodejs in windows

# Check that git bash is installed successfully
In Gitbash window give the following command

git --version

# Creating the jsDrome project in github 
1. Goto www.github.com
2. Login to your github account and Create a new public github project as "jsDrome"

# Generating the copying the ssh-public key in github account
In Gitbash window give the following command

ssh-keygen

1. Copy the public key (.pub file) using cat of the path (if the path has spaces then it needs to be given within quotes)

cat "path of .pub file"

2. Copy the entire public key

3. Go to user-settings in Github (top most right hand side corner), Click on SSH and GPG keys in user-settings and add the public key of your machine


# Cloning the git project in local system

1. Go to the project in github, choose ssh (There will be HTTPS and ssh) and copy the ssh path

2. Give the following command in git bash in your system- 

git clone git@github.com:seomun19/jsDrome.git

3. Give pwd to know the location of the cloned folder

4. In the latest vscode it comes with built in terminal

# Opening the cloned git folder in vs code

1. In vscode goto File menu, open folder and open the folder where you cloned the repository (Earlier pwd would have told you the path in step-3 above)

2. Open a new terminal in vscode- In terminal "Select default shell" and choose git bash

3. Close terminal and open it again

4. Give the following command in the terminal 

npm init 

5. Give enter for everything in the npm init command (creates a file called package.json)

# Creating a .gitignore file
1. In the same project in vscode create a file called ".gitignore" in the same folder.
2. add an entry node_modules in the ".gitignore" file
(This helps to avoid commiting node dependency files while doing commit and push in the future)
3. Save the file

# pushing to git hub

In the vscode bash terminal give the following commands

git status

git add .

git commit -m "initial package"

git push

(The above commands will fail for the first time)

# Resolving the commit failure for first time
Now copy the config email and config user name commands and give it in the vscode bash terminal.

git config email "email" (Here email refers to the git hub email id)

git config user name "username" (Here user name refers to your github username)

# Again give git commit and push
git commit -m "Initial commit"

git push

This time git push will be successful. 

# Checking that the initial commit is successful
Now goto your github account and you should find the following 2 files

1. package.json

2. gitignore

Copy the path of the project from the browser url in the github and submit to the instructor.