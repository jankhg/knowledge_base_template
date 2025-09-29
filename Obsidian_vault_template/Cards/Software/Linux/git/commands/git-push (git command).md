up:: [[git commands MOC (git)]]
dates:: 2025-03-01
tags:: 

---

# git-push (git command)

Push all commits of the current branch to the upstream:
```bash
git push
```

You can also push a local branch to a remote with a _different_ name:
```bash
git push origin <localbranch>:<remotebranch>
```

You can also _delete_ a remote branch by pushing an empty branch to it:
```bash
git push origin :<remotebranch>
```


## Forcing a push
- `--force` : Overwrites the remote, no matter what. **Use with care!**
- `--force-with-lease` : "I want to force push my changes, but only if the remote repository is in the same state as my last fetch."
