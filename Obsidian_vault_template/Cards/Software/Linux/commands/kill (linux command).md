up:: [[Linux commands]]
dates:: 2023-01-24
tags:: 

---

# kill (linux command)

Kill a process
```bash
kill -9 <PID>
```

Use e.g. [[pidof (linux command)|pidof]], or *top* to find out the PID of a process.

- `-9` : KILL
- `-15` : SIGTERM

Kill process with process ID `<PID>`:
```
kill -s SIGKILL <PID>
```