up:: [[git commands MOC (git)]]
dates:: 2025-03-01
tags:: 

---

# git-diff (git command)


| Command                      | Description                                                                                                                                                        |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `git diff --staged`          | Shows the diff between the *staged files* and the last *commit*:                                                                                                   |
| `git diff`                   | Show the changes between the working tree and the last commit. This ignores staged changes.                                                                        |
| `git diff HEAD`              | Like `git diff` but includes stages changes.                                                                                                                       |
| `git diff HEAD~1`            | Show the differences between the previous commit and the current state, including the last commit and uncommitted changes.                                         |
| `git diff <hash_1> <hash_2>` | Show the change between two commits. This shows which changes are made in `<hash_2>` compared to `<hash_1>`. So if `<hash_2>` adds a line, it is shown with a `+`. |

**Options:**
- `--name-only` : Only show names of changed files

