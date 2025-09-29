up:: [[git]]
dates:: 2022-12-11
tags:: 

---

# git snippets (git)

## Add a remote

```bash
git remote rename origin old-origin
git remote add origin https://path.to.repo.git
```

Set the new remote as the upstream origin (standard remote repository to push to) for one local branch:
```bash
git push -u origin <local-branch-name>
```

Alternatively:
Set the new remote as the upstream origin (standard remote repository to push to) for all branches:
```bash
git push -u origin --all
git push -u origin --tags
```

## Undo a rebase

First, check the commit history using
- `git reflog`
- or `git log -g` to get more detailed information
and identify the commit to which you want to go back.
Then do this using
```bash
git reset --hard HEAD@{2}
```
where `2` is to be replaced by the correct number.

