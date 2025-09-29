---
aliases: [netcat]
---

up:: [[Linux commands]]
dates:: 
tags:: 

---

# nc, netcat (linux command)

## Listening as a server

Act as server and listen on port 5555, and watch the data throughput:
```bash
nc -l -p 5555 | pv > /dev/null
```

## Listening as a client

```shell
nc 127.0.0.1 5555 | pv > /dev/null
```

## Sending as a server

```shell
echo "Hallo" | nc -l -p 5555
```

## Sending as a client

Act as client and send a message to a server:
```bash
echo -n "Hallo" | nc 127.0.0.1 5555
```


## More options
- `-I` : Specify the size of the TCP receive buffer
- `-O` : Specify the size of the TCP send buffer
- `-u` : Use UDP instead of TCP
- `-k` : Keep connection alive after disconnect
- `-v` : Verbose output

## Alternatives
- socat
- [[tcpdump (linux command)]]
