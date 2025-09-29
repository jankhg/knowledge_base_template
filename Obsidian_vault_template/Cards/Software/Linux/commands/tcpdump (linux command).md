up:: [[Linux commands]]
dates:: 2022-12-06
tags:: 

---

# tcpdump (linux command)

Dumps generated with tcpdum can be analyze using [[Wireshark]].

Create a tcp dump on interface eno2:
```bash
sudo tcpdump -i eno2 -w "`date +%Y%m%dT%H%M%SZ`_tcpdump.pcap" -C 100 -W 2
```
- `-i` : Specify the interface to observer. Use `-i lo` to monitor data sent between from localhost to localhost.
- `-w` : Specify the output filename
- `-C 100` : Limit the file size. The number is in units of 10e6 byte. A new file is written when the limit is reached.
- `-W` : Use together with `-C`. Specifies the max. amount of files to use. They are cyclically overwritten. For example, `-W 2` uses 2 files.

Further options
- `port 5123` : Only dump packets that go to or come from port 5123
- `-n` : Do not do DNS lookups to resolve IP addresses.


## Errors
- In case of `tcpdump: data.2024-07-25_12.45.pcap0: Permission denied` try running `tcpdump` from within the `/tmp` folder.


## Also see
- [[nc, netcat (linux command)|netcat]] : Might be needed, if a server needs to be running