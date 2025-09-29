up:: [[git]]
dates:: 2023-12-11
tags:: #note/stub

---
## TODOs
- [ ] Add description of how it works
- [ ] Add info about `.git/info/exclude`
- [ ] Add info about `.gitignore` in subdirectories

# gitignore file (git)

Ignore files or entire folders using `.gitinore` files. These files can be put into any folder of a repository.

**Untracked file ignoring:**
You can also use the file `.git/info/exclude` like a `.gitignore` file, but this one is not tracked by git and never pushed. So it's a nice way to exclude files without informing the team about these excludes.

**Comments**
```
# This is a comment in a .gitignore file
```

**Wildcard**: Ignore all files with the extension `.txt`:
```
*.txt
```

**Rooted pattern**: Anchor relative to the folder containing the `.gitignore`:
```
/node_modules
```

**Negation**:
```
*.txt
!important.txt
```
ignores all `*.txt` files except `important.txt`.

**Order matters**:
```
!important.txt
*.txt
```
ignores `important.txt`.


## Keeping an empty folder

Folder structure
```
repo_root
├─ conf
│  └─ .gitkeep
└─ .gitignore`
```

```
# .gitignore file in repo_root

# Exclude everything from folder 'conf'
/conf/*

# But keep the folder itself
!/conf/.gitkeep 
```

## Untrack a file that was previously committed and then added to `.gitignore`
%% Source: https://stackoverflow.com/questions/6919121/why-there-are-two-ways-to-unstage-a-file-in-git %%
I did not try this yet:
```bash
git rm --cached <file>
```
**Stages the removal of the file(s)** from the repo (assuming it was already committed before) but leaves the file in your working tree (leaving you with an untracked file). See [[git-rm (git command)]].

## Examples
The `.gitignore`
```
venv/activate
```
would also ignore `src/venv/activate`.