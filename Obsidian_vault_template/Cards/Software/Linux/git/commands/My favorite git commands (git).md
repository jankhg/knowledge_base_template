up:: [[git commands MOC (git)]]
dates:: 2025-03-01
tags:: 

---

# My favorite git commands (git)

## My favorite git commands

Show a very *nice graph*:
```bash
git --no-pager log --graph --oneline --all --decorate --parents
```

*Rebase* a branch and all previous branches:
```bash
git rebase --update-refs master feature
```

*Unstage a file* (the file contents are kept):
```bash
git reset -- <filepath>
```

*Untrack* a folder or file from the repository, but keep the current version in the working tree. The folder or file has to be listed in `.gitignore`.
```bash
git rm -r --cached path/to/folder/or/file
```