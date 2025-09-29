up:: [[Linux commands]]
dates:: 2022-12-06
tags:: 

---

# IP addresses (linux commands)

## Obtain information

Obtain IP address of machine
```bash
curl ifconfig.me
```

Obtain details about network adapters
```bash
ifconfig -a
ip link
ip addr
```

Check which route is used for connecting to a specific server
```bash
ip route 8.8.8.8
```

Get network status information
```bash
networkctl status
networkctl status -a
```

## Changing configuration

Set IP address of network interface eno1 to 192.168.0.123
```bash
sudo ifconfig eno1 192.168.0.123
```

Set IP address with bitmask 255.255.255.0
```bash
sudo ifconfig eno1 192.168.0.123/24
```

Safely change an IP address with a reboot scheduled for the case of no success. This can be very helpful when configuring remote servers.
```bash
sudo ifconfig eno1 192.168.0.123 & (sleep 60s && sudo reboot)
```
The reboot can then be cancelled using Ctrl+C.

Alternative method: Use 
```bash
sleep 60 && reboot
```
in one SSH session and then use
```bash
sudo ifconfig eno1 192.168.0.123
```
in another.

## Activate / deactivate interfaces
```bash
ip link set dev <interface> up
```


## DNS configuration
Change domain name server:
```shell
sudo vim /etc/resolv.conf
```

For example, to add the google DNS, add this line:
```txt
nameserver 8.8.8.8
```

## Further
```bash
networkctl list
```

