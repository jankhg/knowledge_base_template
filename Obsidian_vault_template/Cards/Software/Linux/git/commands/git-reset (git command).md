up:: [[git commands MOC (git)]]
dates:: 2025-02-28
tags:: 

---

# git-reset (git command)

## Undo a commit

*Delete* the last commit, *but keep the changes in the index*:
```bash
git reset --soft <hash>
```
- Replace `<hash>`, e.g. by `HEAD~3` to go back and delete 3 commits from HEAD.

Delete all changes from the working tree and the index. Basically go back to the last commit:
```bash
git reset --hard <hash>
```
**WARNING: This deletes all uncommited changes!**

## Unstage files

*Unstage a file* (the file contents are kept):
```bash
git reset -- <filepath>
```

*Unstge everything* (all file contents are kept):
```bash
git reset --
```
