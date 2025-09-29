up:: [[Linux commands]]
dates:: 2022-12-06
tags:: 

---

# tar (linux command)

| Option | Meaning                          |
| ------ | -------------------------------- |
| `-c`   | create                           |
| `-f`   | use a file as the archive target |
| `-v`   | verbose                          |
| `-x`   | extract                          |
| `-z`   | zip the file                     |
| `-t`   | list contents of an archive      |

## Get information

List all contents of a tar file
```bash
tar -tzvf archive.tar.gz
```

Only for the 1st level:
```bash
tar --exclude="*/*" -tf archive.tar.gz
```


Only for the first two levels:
```bash
tar --exclude="*/*/*" -tf archive.tar.gz
```

## Create

Create archive of selected folders/files
```bash
tar -czvf archive.tar.gz /path/to/dir1
tar -czvf archive.tar.gz /path/to/dir1 dir2 file1 file2
```

Exclude folders or files
```bash
tar --exclude='./folder' -czvf archive.tar.gz /path/to/dir1
```

Create archive of all pdf files
```bash
tar -czvf archive.tar.gz *.pdf
```

### Treating soft links

%% Source: https://superuser.com/questions/137388/how-can-i-tar-ball-a-directory-hierarchy-with-soft-links-in-linux %%

By standard soft links are saved in the tar archive as soft links. Then there are two cases:
- If the symlink is a full pathname, it might be broken when untarred.
- If the symlink is a relative pathname, under the folder being tarred, it will work fine when extracted.
If you want to tar the file and not the symlink, you can use the `-h / --dereference` arguments.


## Extract

Extract tar file:
```bash
tar -xzvf archive.tar.gz
```

Extract tar file to chosen directory:
```bash
tar -xzvf archive.tar.gz -C /path/to/dir
```

Extract only one directory contained in a tar file:
```bash
tar -xzvf archive.tar.gz path/to/dir
```
- Note that `path/to/dir` does not have a leading slash!
- This creates the folders `./path/to/dir` in the current directory.
