# Initial Commit

&nbsp;

## Summary
In the previous chapter, we setup the Development Environment. In this chapter, we will make our first commit to the repo.

Tools like editorconfig and eslint ensure good coding practices is followed by all in the team. We will see how to integrate them into our application.

## Configure
Create your empty repository in Github.

## Install
We are going to use npm for installing our dependencies. Make sure you have `node` and `npm` installed.

Begin by running `npm init`.
This will create a file called `package.json` in the root of your repository with some basic settings. We will build on top of this.

    npm init
    echo node_modules > .gitignore

Commit and push.

    git add .
    git commit -m 'Initial Commit'
    git push --set-upstream origin master

Now, lets configure our lint rules and editor rules.