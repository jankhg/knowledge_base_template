up:: [[git commands MOC (git)]]
dates:: 2025-03-01
tags:: 

---
## Also see
- [[gitignore file (git)]]
# git-rm (git command)

*Untrack* a folder or file from the repository, but keep the current version in the working tree. The folder or file has to be listed in `.gitignore`.
```bash
git rm -r --cached path/to/folder/
```