up:: [[git commands MOC (git)]]
dates:: 2025-03-01
tags:: 

---
## Also see
- [[git-diff (git command)]]
- [[git-stash (git command)]]
- [[git-format-patch (git command)]]
# git-apply (git command)

Apply a patchfile:
```bash
git apply bugfix.patch
```

A patchfile can be created, e.g.:
```bash
git diff HEAD~3 -p > bugfix.patch
```
or via
```bash
git stash show [<i>] -p > bugfix.patch
```
- `[<i>]` : The index of the required stash entry