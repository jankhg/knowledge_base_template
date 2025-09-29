up:: [[Linux commands]]
dates:: 2023-01-16
tags:: 

---

# passwd (linux command)

Change password of the current user:
```bash
passwd
```

Change the password of another user:
```bash
su -
passwd <username>
```

Change a forgotten password using a live boot:
```bash
passwd --root MOUNT_POINT USER_NAME
```

