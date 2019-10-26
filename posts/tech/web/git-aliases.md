<img src="/img/command-line-shortcuts.jpg" title="command-line-shortcuts" class="post-first-image" />

# My favourite Git aliases

&nbsp;

## Summary

Aliases are always helpful. They save a lot of time. Every day, at my work, I use git commands almost all them time and it can be a good thing to use git aliases. Over the past few years, they have made my job very easy.
But, it comes with its problems too. I am so used to these that I tend to use them in other machines as well. Or even when I am inside a docker container or when I ssh into a machine. That can be very annoying. Below are the list of all my git aliases.

    alias addncommit='gaa;git commit -m'
    alias amend='git commit --amend'
    alias cached='git ls-files --cached'
    alias commitcount='git shortlog | grep '\''):'\'''
    alias deleted='git ls-files --deleted'
    alias ga='git commit --amend --no-edit'
    alias gaa='git add --all'
    alias gb='git branch'
    alias gba='git branch -a'
    alias gbd='git branch -d'
    alias gbdd='git branch -D'
    alias gce='git config --edit'
    alias gceg='git config --edit --global'
    alias gco='git checkout'
    alias gcob='git checkout -b'
    alias gcz='git cz'
    alias gd='git diff --color'
    alias gf='git fetch'
    alias gfa='git fetch --all'
    alias gi='git update-index --assume-unchanged'
    alias gl='git log'
    alias glbn='git log --branches --not --remotes'
    alias gni='git update-index --no-assume-unchanged'
    alias gp='git push'
    alias gpom='git push origin master'
    alias gpu='git push -u'
    alias gpull='git pull'
    alias grh='git reset HEAD'
    alias grv='git remote -v'
    alias gs='git status'
    alias gsc='git show --color'
    alias gscs='git show --color -C --stat'
    alias gshit='git reset --hard'alias gst='git stash'
    alias gsta='git stash apply'
    alias gstc='git stash clear'
    alias gstd='git stash drop'
    alias gsth='git reset --hard'
    alias gstl='git stash list'
    alias gstp='git stash pop'
    alias gt='git log --decorate --abbrev-commit --oneline --graph'
    alias ignored='git ls-files -o -i --exclude-standard'
    alias modified='git ls-files --modified'
    alias staged='git ls-files --stage'

## Execute

    vi ~/.bash_profile
    // paste the above code and save it.
    source ~/.bash_profile
