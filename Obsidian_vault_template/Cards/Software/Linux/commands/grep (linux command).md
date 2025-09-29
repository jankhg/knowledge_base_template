up:: [[Linux commands]]
dates:: 2023-01-22
tags:: 

---

# grep (linux command)

> [!Summary]
> Print lines matching a pattern

Search a file for a term:
```bash
$ grep <search_term> <filename>
```

Or with pipe:
```bash
$ ls | grep <search_term>
```

Search for lines that contain at least one of multiple search terms:
```bash
... | grep -e <search_term_1> -e <search_term_1>
```

Recursively search a folder for content:
```bash
grep -rn '/path/to/somewhere/' -e 'pattern'
```
Parameters:
- `-r` : Recursively search subfolders, skipping symlinks
- `-R` : Recursively search subfolders, dereferencing symlinks
- `-l` : Only list filenames
- `-n` : Print the line numbers of mathes
- `-v` : Invert the sense of matching
- `-w` : Search the whole word
- `-e` : Specify the pattern to search for
- `-i` : Invert the sense of matching
