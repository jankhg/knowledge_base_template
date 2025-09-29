up:: [[git commands MOC (git)]]
dates:: 2025-03-05
tags:: 

---

# git-cherry-pick (git command)

Take the changes that were introduced by a single commit and apply them to another branch:
```bash
git cherry-pick <commit_hash>
```
Options
- `-e, --edit` : Allows you to edit the commit message before creating the new commit.
- `-n, --no-commit` : Applies the changes, but does not create a new commit. Changes remain in the index. Useful, when applying multiple cherry-picks.
- 

(I think this commands should only be called pick.)