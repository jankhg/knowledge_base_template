up:: [[Linux commands]]
dates:: 2022-12-06
tags:: 

---

## Also see
- [[scp (linux command)]] -> Copy files via SSH
- [Visual SSH](https://ittavern.com/visual-guide-to-ssh-tunneling-and-port-forwarding/)

# ssh (linux command)

## Basic

Connect to server via SSH in a terminal:
```bash
ssh user@host
```

Execute a command on the remote, without going into the remote shell, e.g. giving the last filename of a remote folder:
```bash
ssh user@host "ls | tail -n 1"
```

## Access through jump host

Connect to `host` through `proxy1` and `proxy2`:
```bash
ssh -o "ProxyJump user1@proxy1,user2@proxy2" user@host
```
## Access without password

Create RSA key pair on the machine from which you want to connect to the server:
```bash
ssh-keygen -t ed25519 -a 100
```
- `-t` : key scheme
    - There are 4 public key algorithms for authentication
        - `ed25519` : *Ed25519* with SHA512. **Should be used**
        - `dsa` : *DSA* with SHA1. **Known to be broken** %% Source: https://security.stackexchange.com/questions/143442/what-are-ssh-keygen-best-practices %%
        - `ecdsa` : *ECDSA* with SHA256, SHA384, or SHA512. **Might be broken by NSA.** %% Source: https://security.stackexchange.com/questions/143442/what-are-ssh-keygen-best-practices %%
        - `-t rsa -b 4096` : *RSA* with SHA1. **Should no longer be used.** %% Source: https://security.stackexchange.com/questions/143442/what-are-ssh-keygen-best-practices %%
    - For more information about which algorithm to use, [see here](https://stribika.github.io/2015/01/04/secure-secure-shell.html).
- `-a 100` : Amount of KDF rounds applied. Higher numbers result in slower passphrase verification and increased resistance to brute-force password cracking.
- When asked for a password, it can be left empty.


### Copy the key to the server using ssh-copy-id

#### Directly
```bash
ssh-copy-id user@host
```
In case the ssh port is not 22, create a config file entry first (see below).
Accessing the host via `ssh user@host` will now prompt for no password, in case none was entered during the key generation with `ssh-keygen`.
Even better: use SSH config (see below).

#### Through an SSH proxy
This is a very simple option and should be preferred over the SSH tunnel option.
```shell
ssh-copy-id -o "ProxyJump user1@proxy1,user2@proxy2" user@server
```
- Replace `user1` by the username and `proxy1` by the IP address of proxy1, etc.

#### Through an SSH tunnel
On machine *A* open an SSH tunnel from *A* to *B* to *C* on local port 1234 (or some other unclaimed local port):
```
ssh -L 1234:C:22 <username-for-B>@B
```
Copy the key:
```
ssh-copy-id -p 1234 <username-for-C>@localhost
```
Replace `C` and `B` by the respective IP addresses.


### Copy the public SSH key to a Linux server from a Windows client
%% Source: https://chrisjhart.com/Windows-10-ssh-copy-id/ %%
#### Directly
On Windows the program `ssh-copy-id` is not available. Instead, do this **in PowerShell** (it does not work in the Command Prompt):
```shell
type $env:USERPROFILE\.ssh\id_ed25519.pub | ssh <user>@<remote_ip> "cat | tr -d '\r' >> .ssh/authorized_keys"
```
- The `tr -d '\r'` is used to remove the carriage return (CR) that stems from Windows

#### Through an SSH proxy
```shell
type $env:USERPROFILE\.ssh\id_ed25519.pub | ssh -o "ProxyJump user1@proxy1,user2@proxy2" <user>@<remote_ip> "cat | tr -d '\r' >> .ssh/authorized_keys"
```

## SSH config

For fast access of hosts, create an entry in the file `~/.ssh/config`:
```text
Host <short_alias>
    HostName <host_name_or_ip_address>
    User <username>
    Port <port_(optional)>
```

Then access the host via
```shell
ssh <short_alias>
```

## Copy files via ssh
- See [[scp (linux command)]]

## Run command on remote machine via ssh
Login as `user` on `host` and execute a `ping` command:
```shell
ssh user@host 'ping -c1 8.8.8.8'
```
Options:
- `-t` : Force pseudo-terminal allocation. Can be useful for interactive programs.

I implemented this in python: [[Run command remotely via ssh (Python)]]


## Allow other algorithms

```
ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=ssh-rsa
```

## Options explained
- `-L` : Bind local port to remote port
- `-J` : ProxyJump
- 