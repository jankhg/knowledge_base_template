up:: [[Linux commands]]
dates:: 2022-12-06
tags:: #note/stub 

---

# lsblk (linux comand)

Get information about filesystem:
```shell
lsblk -f
```

Precisely define columns to show:
```shell
lsblk -o NAME,FSTYPE,SIZE,TYPE,MOUNTPOINT
```