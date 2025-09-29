up:: [[Linux commands]]
dates:: 2023-01-16
tags:: 

---

# stat (linux command)

Get the numerical chmod value for a file or folder
```bash
$ stat --format "%a" <filename>
777
```
Or with "rwx" letters:
```bash
$ stat --format "%A" <filename>
drwxrwxrwx
```
