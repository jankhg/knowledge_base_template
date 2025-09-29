up:: [[Linux commands]]
dates:: 2023-01-10
tags:: 

---

# rm (linux command)

Delete all non-hidden files in a directory and subdirectories:
```bash
rm -rf /some/path/*
```

Delete all hidden files in a directory (but not subdirectories)
```bash
rm -rf /some/path/.*
```

Delete all `*.jpg` files in the current directory
```shell
rm *.jpg
```

Suppress error message in case the file does not exist
```shell
rm -f /path/to/file
```