up:: [[git commands MOC (git)]]
dates:: 2025-02-28
tags:: 

---

# git-log (git command)

Show the history by traversing back from the current branch head (or multiple ones):
```bash
git log
```

Options:
- `--no-pager` : Non-interactive
- `--oneline` : Condensed view, short hashes
- `--all` : Show all branches, not just the current one
- `--decorate` : Show branch tips, also those of remotes
    - `--decorate=full` : Full information about branch tips (full folder paths of the refs)
    - `--decorate=short` : The default, easy to read
    - `--decorate=no` : Do not show branch tips
- `--parents` : Show hashes of parents
Further options
- `-n 10` : Only show up to 10 commits
- `-p` : Show the changes that were made in each commit.

Show the log for another branch:
```bash
git log <branch_name>
```

**My favorite git log command:**
```bash
git --no-pager log --graph --oneline --all --parents
```

