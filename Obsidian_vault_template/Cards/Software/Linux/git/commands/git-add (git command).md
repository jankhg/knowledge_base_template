up:: [[git commands MOC (git)]]
dates:: 2025-02-26
tags:: 

---

# git-add (git command)

## Use `git add` to stage files (add them to the index)

Stage a file (add a file to the index):
```bash
git add <filepath>
```

Stage all files of the CWD:
```bash
git add .
```

## Solving problems
- Use [[git-reset (git command)]] to unstage files from the index.
- Use [[git-rm (git command)]] to stop git from tracking files that are now listed in [[gitignore file (git)]], but were previously commited.