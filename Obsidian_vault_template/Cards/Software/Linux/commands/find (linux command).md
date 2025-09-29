up:: [[Linux commands]]
dates:: 2022-12-06
tags:: 

---
## Also see
- [[grep (linux command)]] for searching the contents of files.

# find (linux command)

List all files, incl. subdirectories:
```bash
find .
```

Find files that start with "foo":
```bash
find . -name "foo*"
```

Recursively find symbolic links:
%% Source: https://stackoverflow.com/questions/8513133/how-do-i-find-all-of-the-symlinks-in-a-directory-tree %%
```bash
ls -lR /path/to/folder | grep ^l
```

Recursively find broken links:
%% Source: https://unix.stackexchange.com/questions/34248/how-can-i-find-broken-symlinks %%
```bash
find /path/to/folder -xtype l
```