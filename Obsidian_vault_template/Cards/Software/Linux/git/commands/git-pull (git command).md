up:: [[git commands MOC (git)]]
dates:: 2025-03-01
tags:: #note/stub

---

# git-pull (git command)

`git pull` is a shortcut for `git fetch && git merge origin/feature`

Pull a remote branch into the local branch:
```bash
git pull
```
- This *uses the configured upstream remote* of the current branch to pull from.

Ensure that we do not rebase when pulling:
```bash
git config pull.rebase false
```

**I prefer to use rebasing when pulling:**
```bash
git config --global pull.rebase true
```