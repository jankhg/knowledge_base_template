up:: [[git commands MOC (git)]]
dates:: 2025-03-05
tags:: 

---

# git-reflog (git command)

Show the commit hash of the *current HEAD*
```bash
cat .git/HEAD
```
- No `git reflog` required.

Show the *history for the HEAD* ref:
```bash
git reflog
```
- Notation: `HEAD@{n}` refers to the commit where the `HEAD` was `n` moves ago.

This can be very useful in case you deleted a branch that is now no longer accessible. It can be recovered via `git reflog`.

A simple way to regain such changes is via a merge:
```bash
git merge HEAD@{1}
```
- This merges the commit where `HEAD` was one move ago.

## Commit-ishes
In many places where git expects a commit hash, you can also provide a commit-ish, e.g.
- A *branchname*.
- `HEAD~2` : The parent's parent of the commit that the `HEAD` currently points to.
- `HEAD@{3}` : The commit that `HEAD` was at three moves ago.

