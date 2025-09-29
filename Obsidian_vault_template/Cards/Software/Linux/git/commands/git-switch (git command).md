up:: [[git commands MOC (git)]]
dates:: 2025-02-28
tags:: 

---

# git-switch (git command)

Switch to another branch, or create a new branch.

| Command                                | Description                                                                                                                                                                                               |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `git switch <branch_name>`             | Switch to another bran                                                                                                                                                                                    |
| `git switch -`                         | **Switch to the branch I was previously on. Nice**                                                                                                                                                        |
| `git switch -c <branch_name>`          | Creata a new branch based on the current commit and switch to it. The *reflog of the old branch is not copied*. See [[git-branch (git command)\|git branch]], if you also want to copy the branch reflog. |
| `git switch -c <branch_name> <commit>` | Create a new branch based on a specific c                                                                                                                                                                 |
