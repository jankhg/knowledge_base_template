up:: [[git]]
dates:: 2025-02-14
tags:: #note/stub

---

# Access GitLab via proxy (git)

Open the file `~/.gitconfig`
```shell
touch ~/.gitconfig
```
and add this section:
```ini
[http]
    proxy = http://192.168.0.3:3128
```

## Going through a jump host to the proxy
```ini
[http]
    proxy = http://localhost:3128
```
Then run this:
```shell
ssh -L 3128:proxy_ip:3128 user@jump_host -N
```