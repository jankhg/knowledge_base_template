up:: [[git commands MOC (git)]]
dates:: 2025-03-01
tags:: 

---
## Also see
- [[Writing good git commit messages (git)]]
# git-commit (git command)

Commit all changes that are currently staged (are in the index)
```bash
git commit -m "Your commit message"
```

*Interactively change commit message* of previous commit:
```bash
git commit --amend
```
- The changed commit will have a different hash.

*Non-interactively change commit message* of previous commit:
```bash
git commit --amend -m "Changed commit message"
```
