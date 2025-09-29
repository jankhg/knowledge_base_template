up:: [[git commands MOC (git)]]
dates:: 2025-03-16
tags:: 

---
## Also see
- [[git-stash (git command)]]

# git-worktree (git command)

The git folder is also called *main worktree*. You can add additional *linked worktrees*, to checkout multiple branches at the same time. Linked worktrees are contained in folders outside of the main worktree.

| Command                               | Description                                                                                        |
| ------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `git worktree list`                   | *List* all worktrees.                                                                              |
| `git worktree add <path> [<branch>]`  | *Create* a new linked worktree.                                                                    |
| `git worktree add ../bugfix`          | Example: Will create a new linked worktree in the folder `../bugfix` and a branch called `bugfix`. |
| `git worktree remove <worktree_name>` | *Delete* a worktree from the main worktree.                                                        |


As an alternative to `git worktree remove`, simply delete the linked worktree folder, then do this in the main worktree:
```bash
git worktree prune
```
which will delete the references to all manually deleted linked worktrees. The branch previously checked out in the linked tree will remain part of the repository.

**Main worktree:**
- The main folder with the `.git` folder inside.
- Heavy, contains all the history.
- Created with `git init` or `git clone`.
**Linked worktree:**
- Contains a `.git` file with a path to the main working tree.
- Light (essentially no data in there!), about as light as a branch.
- Can be complicated to work with when it comes to env files and secrets.

Info:
- *Linked worktrees* behave just like a *main worktree*. You can create new branches, switch branches, delete branches, create tags, etc.
- In a linked worktree you cannot work on a branch that is currently checked out by any other working tree (main or linked).
- The main worktree contains all references to linked worktrees in `.git/worktrees`.
- *Commits in a linked worktree* are not stored in the folder of the linked worktree, but *are stored in the `.git` folder of the main worktree.*
- Note that a linked worktree has no `.git` directory, so it's not a separate repository. *It's just a different view of the same repository.*

When using running `git branch` in the main worktree, you get for example this:
```
* main
+ feature
```
when running it in the linked worktree, where `feature` is checked out, you get this:
```
+ main
* feature
```
So `*` marks the branch checked out in the current worktree, while `+` marks branches checked out in other worktrees.

## Comparison with `git stash`

`git stash` is good for small changes, while `git worktree` is good for bigger and more long-lived changes.