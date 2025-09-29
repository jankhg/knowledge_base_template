up:: [[git commands MOC (git)]]
dates:: 2025-03-01
tags:: 

---
## Also see
- [[git-rebase (git command)]]
- [[Rebase vs. Merge (git workflow)]]
# git-merge (git commands)

Merge branch `<branch-name>` into current branch:
```bash
git merge <branch-name>
```

**Branches can also be merged between local and remote repos.** Merge `origin/master` into the local `master`:
```bash
git switch master
git merge origin/master
```

You can also merge commits:
```bash
git merge HEAD@{1}
git merge <hash>
```


## Resolving merge conflicts

When a merge conflict arises, the respective source code looks like this:
```
<<<<<<< HEAD
Our source code
lines.
=======
Their source
code lines.
>>>>>>> <branch_name>
```
- Wen we used `git switch main && git merge <branch_name>`, The HEAD will refer to `main`.
- When rebasing, `HEAD` is first changed to the branch onto which we want to rebase. This means that `--ours` refers to the base branch, and `--theirs` refers to the branch that is being rebased, and which contains our changes.

You can always abort a merge via `git merge --abort`.
### Checkout conflict
While in a merge with conflicts, you can use
```bash
git checkout --ours path/to/file
```
to *keep exactly our version* of a file, or
```bash
git checkout --theirs path/to/file
```
to *keep exactly their version* of a file.

### Rerere
Have a look at the option `rerere.enabled` in [[Git configuration options (git)]].
