up:: [[Linux commands]]
dates:: 
tags:: 

---

# scp (linux command)

## Linux

Copy a file:

```bash
scp user@example.com:/tmp/foo.txt ./foo.txt
scp ./foo.txt user@example.com:/tmp/foo.txt
```

Copy a folder from remote to local:
```bash
scp -r user@example.com:/tmp/ .tmp/
```

Copy a folder from local to remote:
```bash
scp -r /path/to/folder user@remote:/home/user/
```
- This will create the folder `/home/user/folder/` on the remote.

## Copy files via SSH tunnel (remote to local)
  
%% Source: https://mperdikeas.github.io/networking.html.files/scp-a-file-through-jump-host.html %%

1. On machine *A* open an SSH tunnel from *A* to *B* to *C* on local port 1234 (or some other unclaimed local port):
```bash
ssh -L 1234:C:22 <username-for-B>@B
``` 
- Replace `C` and `B` by the respective IP addresses.
2. Copy the file(s) through the local opening of the tunnel (1234) on the localhost:
```bash
scp -P 1234 -pr usernameForC@localhost:/some/path ./
```
  - `-P` : Specify the port to use
  - `-p` : Preserve permission rights on files
  - `-r` : Recursive -> include subfolders
3. Exit the tunnel opened in the first step.


## Copy file via two jump hosts (remote to local)
```bash
scp -o "ProxyJump user1@jump_host1_ip,user2@jump_host2_ip" local_file user@target_machine_ip:/path/to/destination
```

## Copy a folder via multiple jump hosts and keep all links, etc.
E.g. copy the whole home folder:
```bash
rsync -avz -e "ssh -J user1@host1,user2@host2" user@remote:/home/john/ /home/
```
- `-a` : Archive mode. Preserves permissions, timestamps, symbolic links.
- `-v` : Verbose mode.
- `-z` : Compress file data during transfer.
## Windows

Use pscp.exe from PuTTY
```bash
pscp -P 22 user@example.com:/tmp/foo.txt C:\Documents\foo.txt
```

Copy a folder:
```bash
pscp -r user@example.com:/tmp/* C:\Documents\temp\
```

