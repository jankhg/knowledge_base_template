up:: [[Linux networking stack]]
dates:: 2024-01-29
tags:: #note/stub

---

# How to set up an HTTP proxy with SQUID (Linux)

- Assume the machine *Server* has access to GitLab/internet.
- The machine *Client* has no direct access to GitLab/internet, but to *Server*.
- We want to access GitLab/internet from *Client*.

## Install an HTTP proxy on the *Server*
```shell
sudo apt install squid
sudo cp /etc/squid/squid.conf /etc/squid/squid.conf.original
sudo chmod a-w /etc/squid/squid.conf.original
```

### Adjusting the squid configuration
Open config file:
```shell
sudo vim /etc/squid/squid.conf
```

Add at the bottom of the `acl` section (line 1196):
```
acl <network_name> src 10.42.0.0/16
```
where `<network_name>` can be freely chosen.
This adds an Access Control List for the source IPs in the range from 10.42.0.0 to 10.42.255.255.

Add at the beginning of the `http_access` section (line 1386):
```
http_access allow <network_name>
```

The proxy port could be changed (line 1910):
```
http_port 3128
```
but we just leave it.

Restart squid server:
```shell
sudo systemctl restart squid.service
```

## Configure git on *Client* to use the proxy

In `~/.gitconfig` add the following:
```
[http]
    proxy = http://pi:password@squid_server_ip:port
```
Here `3128` is the port configured on *Raspi* for squid.


## Configure apt on *Client* to use the proxy

Open `/etc/apt/apt.conf` and add these lines:
```text
Acquire::http::Proxy "http://USERNAME:PASSWORD@SERVER:PORT";
Acquire::https::Proxy "https://USERNAME:PASSWORD@SERVER:PORT";
```

## Configure *Client* to use the proxy via global variables

```
export http_proxy=http://USERNAME:PASSWORD@SERVER:PORT
export https_proxy=http://USERNAME:PASSWORD@SERVER:PORT
```

## Access the proxy through an SSH jump host

```shell
ssh -L 3128:PROXY_SERVER_IP:3128 USER@JUMP_HOST -N
```

```
export http_proxy=http://localhost:3128
export https_proxy=http://localhost:3128
```