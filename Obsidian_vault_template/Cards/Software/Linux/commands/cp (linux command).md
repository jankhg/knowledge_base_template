up:: [[Linux commands]]
dates:: 2022-12-06
tags:: 

---

# cp (linux command)

Copy a whole folder
```bash
cp -av source_folder target_folder
```
Options:
- `-a, --archive` : Preserves file mode, ownership, timestamps, links, context (SELinux security context, if applicable).
    - Same as `--recursive --no-dereference --preserve=all`
- `-v, --verbose` : Detailed output
- `-H` : Preserve symlinks
- `-L` : Dereference symlinks

