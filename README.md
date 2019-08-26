# 2019_Fall


#### Configuring remote for a fork
https://help.github.com/articles/configuring-a-remote-for-a-fork/

1. open a terminal
2. `git remote -v`
3. Specify a new remote `upstream` repository that will be synced with the fork
    `git remote add upstream https://github.com/WVUP/2019_Fall.git`
4. git remote -v

##### Sync your fork with our class repo

1. Checkout your master branch
    `git checkout master`
2. Fetch/pull/push
    For macOS
    `git fetch upstream && git pull --rebase upstream master && git push`
    For Windows
    `git fetch upstream; git pull --rebase upstream master; git push`
