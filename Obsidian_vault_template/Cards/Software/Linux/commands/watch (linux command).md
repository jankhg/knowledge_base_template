up:: [[Linux commands]]
dates:: 2022-12-20
tags:: 

---

# watch (linux command)

Execute a program periodically, showing output fullscreen.

Example:
```bash
watch systemctl status <service-name>
```

```bash
watch -n1 systemctl --user status
```

Watch the tail of the last file in a folder, filtered by `INFO`:
```bash
watch -n1 "cat $(ls | tail -n1) | grep INFO | tail -n20"
```
For very big files:
```bash
watch -n1 "tail -n1000 $(ls | tail -n1) | grep INFO | tail -n20"
```

Parameters:
- `n` : Interval in seconds