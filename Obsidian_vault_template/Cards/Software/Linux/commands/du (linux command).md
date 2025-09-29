up:: [[Linux commands]]
dates:: 2022-12-06
tags:: 

---

# du (linux command)

Show sizes of folders/files in current directory in human readable form, with depth 1, and sort correctly by size

```bash
du -hd1 | sort -h
```

- `-h`: human readable
- `-d1`: depth 1

Get the sizes of all files/directories of the current directory

```bash
du -shc ./* | sort -rh
```

- `-s`: Do not list subdirectories
- `-h`: human readable
- `-c`: print grand total
