up:: [[git commands MOC (git)]]
dates:: 2025-03-01
tags:: 

---
## Also see
- [[git-log (git command)]] for a visualization of branches and commits
- [[git-switch (git command)]] for creating and switching to a new branch in one go

# git-branch (git command)


| Command                           | Description                                                                                  |
| --------------------------------- | -------------------------------------------------------------------------------------------- |
| `git branch <new_branch_name>`    | *Create* a new branch.                                                                       |
| `git switch -c <new_branch_name>` | **Create a new branch and switch to it.** Also see [[git-switch (git command)\|git switch]]. |
| `git branch -c <new_branch_name>` | *Copy* a branch, *including its reflog and config*.                                          |
| `git branch -m oldname newname`   | *Rename* a branch.                                                                           |
| `git branch -d <name>`            | *Delete* a branch.                                                                           |
| `git branch -D <name>`            | *Delete* branch, even if it contains commits that are not merged into its upstream.          |

## Inspection

| Command          | Description                                         |
| ---------------- | --------------------------------------------------- |
| `git branch`     | Get *information* about the current branch.         |
| `git branch -vv` | Get *detailed information* abut the current branch. |
| `git branch -r`  | List all remote branches.                           |
| `git branch -a`  | List all local and remote branches.                 |



## My branch visualization style
I use this style to visualize branches:
```
* C (master)
| * E (feature)
| * D
|/
* B
* A
```
This is basically the same as the output of
```bash
git --no-pager log --graph --oneline --all
```
- See [[git-log (git command)]] for details.