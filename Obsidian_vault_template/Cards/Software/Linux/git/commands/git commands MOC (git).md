up:: [[git]]
dates:: 2022-12-11
tags:: 

---
## Also see
- [[My favorite git commands (git)]]
- [[Git porcelain vs. plumbing commands (git)]]
- [[Git configuration options (git)]]
# 🗺️ git commands MOC (git)

## General command line options

| Option       | Description                                                             | Example(s)                                              |
| ------------ | ----------------------------------------------------------------------- | ------------------------------------------------------- |
| `--no-pager` | Non-inetractive mode                                                    |                                                         |
| `-p`         | Show patch                                                              | `git log -p`<br>`git stash show -p`<br>`git cat-log -p` |
| `--`         | Special option to treat every argument after this point as a file name. | `rm -- -f` Deletes a file named `-f`.                   |


## Commands overview
### Setup and config

| Command                                  | Description                       | Example(s)                   |
| :--------------------------------------- | :-------------------------------- | :--------------------------- |
| [[git-config (git command)\|git config]] | Edit the global git configuration | `git config --global --edit` |
| `git help`                               |                                   |                              |


### Getting and creating projects

| Command                              | Description                                   | Example(s)                       |
| :----------------------------------- | :-------------------------------------------- | :------------------------------- |
| [[git-init (git command)\|git init]] | Convert a folder to a git repository.         | `git init`                       |
| `git clone`                          | Clone a repository to have a full local copy. | `git clone <uri> [<foldername>]` |


### Basic snapshotting

| Command                                  | Description                                            | Example(s)                                                                            |
| ---------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| [[git-add (git command)\|git add]]       | Stage files (add them to the index).                   | `git add .`<br>`git add <filename>`                                                   |
| [[git-status (git command)\|git status]] | Print *current status*.                                | `git status`                                                                          |
| [[git-diff (git command)\|git diff]]     | *Show differences* between commits.                    | `git diff <hash_1> <hash_2>`<br>`git diff HEAD`                                       |
| `git difftool`<br>                       |                                                        |                                                                                       |
| [[git-commit (git command)\|git commit]] | Make a commit                                          | `git commit -m "commit message"`<br>`git commit --amend`                              |
| [[git-reset (git command)\|git reset]]   | Delete commits, or files in the working tree or index. | `git reset --soft HEAD~1`<br>`git reset --hard HEAD~1`<br>`git reset --hard HEAD@{3}` |
| [[git-rm (git command)\|git rm]]<br>     | Untrack files and folders.                             | `git rm --cached <filename>`                                                          |
| `git mv`                                 |                                                        |                                                                                       |
| `git clean`                              |                                                        |                                                                                       |



### Branching and merging

| Command                                      | Description                                                               | Example(s)                                                                |
| -------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [[git-branch (git command)\|git branch]]<br> | Manage branches.                                                          | `git branch --all`<br>`git branch -d <branchname>`                        |
| [[git-checkout (git command)\|git checkout]] | Switch to another branch or commit.                                       | `git checkout <hash>`<br>`git checkout --ours`<br>`git checkout --theirs` |
| [[git-log (git command)\|git log]]           | Show history                                                              | `git --no-pager log --graph --oneline --parents --all -n50`               |
| [[git-merge (git commands)\|git merge]]<br>  | Merge branches.                                                           | `git merge feature`                                                       |
| `git mergetool`<br>                          |                                                                           |                                                                           |
| [[git-stash (git command)\|git stash]]       | Stash changes from the working tree to apply them later on other commits. | `git stash`<br>`git stash list`<br>`git stash pop`                        |
| [[git-switch (git command)\|git switch]]     | Switch between branches.                                                  | `git switch <branch>`<br>`git switch -c <new_branch>`                     |
| [[git-worktree (git command)\|git worktree]] | Checkout multiple branches simultaneously.                                |                                                                           |
| [[git-tag (git command)\|git tag]]           | Create immutable tags, e.g. for versioning.                               |                                                                           |


### Sharing and updating projects
| Command                                        | Description                                       | Example(s)                                                   |
| ---------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------ |
| [[git-fetch (git command)\|git fetch]]         | Get all changes from the remote repository        | `git fetch`                                                  |
| [[git-pull (git command)\|git pull]]           | Shorthand for `git fetch && git merge FETCH_HEAD` | `git pull`                                                   |
| [[git-push (git command)\|git push]]<br>       | Push changes to a remote.                         | `git push`<br>`git push --set-upstream origin feature`       |
| [[git-remote (git command)\|git remote]]<br>   | Manage remotes.                                   | `git remode add origin <url>`<br>`git remote get-url origin` |
| [[git-ls-remote (git command)\|git ls-remote]] |                                                   |                                                              |
| `git archive`                                  | **!!! LEARN !!!**                                 |                                                              |
| [[git-submodule (git command)\|git submodule]] | **!!! LEARN !!!**                                 |                                                              |


### Inspection and comparison
| Command                              | Description       | Example(s)           |
| ------------------------------------ | ----------------- | -------------------- |
| [[git-show (git command)\|git show]] | **!!! LEARN !!!** | `git show -p <hash>` |
| `git shortlog`                       |                   |                      |
| `git describe`                       |                   |                      |


### Debugging

| Command                                  | Description                                           | Example(s)                                                                                                                               |
| ---------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [[git-bisect (git command)\|git bisect]] | Efficiently find the commit that introduced a change. | `git bisect start`<br>`git bisect good <hash>`<br>`git bisect bad <hash>`<br>`git bisect good`<br>`git bisect bad`<br>`git bisect reset` |
| `git blame`                              | **!!! LEARN !!!**                                     |                                                                                                                                          |
| `git grep`                               |                                                       |                                                                                                                                          |

### Patching

| Command                                            | Description                                                                                                                   | Example(s)                                                          |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [[git-cherry-pick (git command)\|git cherry-pick]] | Take the changes introduced by a single commit and apply them to the current branch.                                          | `git cherry-pick <hash>`                                            |
| [[git-rebase (git command)\|git rebase]]           | Rebase a branch onto another branch or commit                                                                                 | `git rebase --update-refs master feature`<br>`git rebase -i HEAD~3` |
| [[git-revert (git command)\|git revert]]           | Create a new commit that undoes changes from a previous commit. Good for public branches, because it does not change history. | `git revert <hash>`                                                 |

### Email
| Command                                              | Description       | Example(s)               |
| ---------------------------------------------------- | ----------------- | ------------------------ |
| [[git-apply (git command)\|git apply]]               | **!!! LEARN !!!** | `git apply bugfix.patch` |
| `git am`                                             |                   |                          |
| [[git-format-patch (git command)\|git format-patch]] | **!!! LEARN !!!** |                          |
| `git imap-send`                                      |                   |                          |
| `git send-email`                                     |                   |                          |
| `git request-pull`                                   |                   |                          |

### External systems

| Command           | Description | Example(s) |
| ----------------- | ----------- | ---------- |
| `git svn`         |             |            |
| `git fast-import` |             |            |

### Administration

| Command                                  | Description                                                      | Example(s) |
| ---------------------------------------- | ---------------------------------------------------------------- | ---------- |
| `git gc`                                 |                                                                  |            |
| [[git-fsck (git command)\|git fsck]]     | **!!! LEARN !!!**                                                |            |
| [[git-reflog (git command)\|git reflog]] | Show the history of `HEAD` and branch heads.                     |            |
| `git filter-branch`                      | **!!! LEARN !!!** Can be used to remove a file from all commits. |            |

