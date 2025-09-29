up:: [[Linux commands]]
dates:: 2022-12-20
tags:: 

---

# systemctl (linux command)

## Managing services

Enable a service:
```bash
systemctl enable <service-name>
```

Start a service:
```bash
systemctl start <service-name>
```

Get the status of a service
```bash
systemctl status <service-name>
```

List all enabled services:
```shell
systemctl list-unit-files --state enabled
```

List all running services:
```shell
systemctl list-unit-files --state running
```
