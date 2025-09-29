up:: [[Linux commands]]
dates:: 2022-12-06
tags:: 

---

# apt (linux command)

Update package list
```bash
sudo apt update
```

Install a package
```bash
sudo apt install python3
```

Install a package from a `*.deb` file:
```bash
sudo dpkg -i package_file.deb
```

Remove package
```bash
sudo apt remove <package_name>
```

List manually installed packages:
```bash
apt-mark showmanual
```

List all files a package installed onto the system:
```bash
dpkg-query -L <package_name>
```

List all files a `*.deb` file will install:
```bash
dpkg-deb -c package_file.deb
```

## Search

Search available packages:
```bash
apt-cache search <name>
```

Search for packages that install a specific file:
```bash
apt-file search --regexp 'bin/ip$'
```


## Upgrade Ubuntu version
```shell
sudo apt update
sudo apt upgrade
sudo do-release-upgrade
```