up:: [[git commands MOC (git)]]
dates:: 2025-03-01
tags:: 

---
## Also see
- [[git-fetch (git command)]]
- [[git-pull (git command)]]
- [[git-push (git command)]]
# git-remote (git command)

*Add* a new remote:
```bash
git remote add origin <uri>
```
- Note that `<uri>` can be a URL, but *can also be a path to another local folder* that is a git repository. Example:
    - `git remote add origin ../webflyx`

*Rename* a remote:
```bash
git remote rename <old> <new>
```

*Remove* a remote:
```bash
git remote remove <remote_name>
```

*Get the URI* for a remote:
```bash
git remote get-url <remote_name>
```

*Set the URI* for a remote:
```bash
git remote set-url <remote_name> <uri>
```

Get *detailed information about remote repositories*
```bash
git remote -vv
```

*Delete a remote branch*:
```bash
git push origin -d <branchname>
```
