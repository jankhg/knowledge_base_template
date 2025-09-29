up:: [[Linux commands]]
dates:: 2023-02-01
tags:: 

---

# Getting hardware information on Linux

Get information about the CPUs:
```bash
lscpu
```

Get information about the amount of RAM:
```bash
grep MemTotal /proc/meminfo
```

Get information about ethernet interfaces:
```bash
lspci | egrep -i --color 'network|ethernet'
```