up:: [[Linux commands]]
dates:: 2023-01-27
tags:: 

---

# tail (linux command)

> [!Summary]
> Output the last part of files

Output the last 10 lines of a file:
```bash
tail -n 10 <filename>
```

Output appended data as the file grows:
```bash
tail -f <filename>
```