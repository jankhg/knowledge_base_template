up:: [[Linux commands]]
dates:: 2022-12-06
tags:: 

---

# ls (linux command)

List hidden files:
```bash
ls -a
```

List details with filesizes:
```bash
ls -lh
```

Only list files, no folders:
%%% Source: https://askubuntu.com/questions/811210/how-can-i-make-ls-only-display-files %%
```bash
ls -p | grep -v /
```
Using `ls -p` tells `ls` to append a slash to entries which are a directory, and using `grep -v /` tells `grep` to return only lines *not* containing a slash.