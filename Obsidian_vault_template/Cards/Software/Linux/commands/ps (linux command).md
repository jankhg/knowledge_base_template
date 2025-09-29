up:: [[Linux commands]]
dates:: 2023-01-27
tags:: 

---

# ps (linux command)

```bash
ps aux
```
- `a` : Show processes for *all users*
- `u` : Display the process' *user/owner*  
- `x` : Also show processes *not attached to a terminal*

Very useful in combination with [[grep (linux command)|grep]]:
```bash
ps aux | grep <name_etc>
```

