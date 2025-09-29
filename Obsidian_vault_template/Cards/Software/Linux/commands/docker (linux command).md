up:: [[Linux commands]]
dates:: 
tags:: 

---
# docker (linux command)

## Install docker on macOS
```shell
brew install --cask docker
```

## Shortcuts

| Shortcut      | Action                                                                               |
| ------------- | ------------------------------------------------------------------------------------ |
| Ctrl+P Ctrl+Q | Leave the console of the currently running container. The container remains running. |


## Setting up docker

```bash
sudo apt install docker.io
sudo groupadd docker
sudo gpasswd -a $USER docker
newgrp docker
docker run hello-world
```

## Getting an image

Search for Ubuntu images:
```bash
docker search ubuntu
```

Download Ubuntu image:
```bash
docker pull ubuntu
```

## Creating a container

Create a container based on image "ubuntu" and run a command inside:
```bash
docker create ubuntu
```

Create container with interactive mode and with custom name:
```bash
docker create -it --name dummy <image_name> bash
```

## Running a container

Create and start a container with a simple command:
```bash
docker run ubuntu echo "Hello world!"
```

Create and start a container with bash access:
```bash
docker run -it ubuntu /bin/bash
```

Give a name to a container and run it in the background
```bash
docker run --name=mycontainername -d ubuntu
```
- `--name` : Give the container a name
- `-d` : Run the container in the background

Start a previously created container:
```bash
docker start <container_id/container_name>
```

Start a stopped container interactively:
```bash
docker container start -i <container_id>
```


### Mapping resources to the container

Map a hots folder to the container:
- Very useful for log files, etc, because they are not deleted, when the container is deleted.
```bash
docker run -v ~/logs:/usr/var/app/log <image_name>
```
- Maps the host folder `~/logs` to container folder `usr/var/app/log`

Map network ports to the container (maps host port 3001 to container port 3000 and host port 23 to container port 22):
```bash
docker run -p 3001:3000 -p 23:22 <image_name>
```

Map the whole host network stack to the container:
```bash
docker run --net=host <image_name>
```

Create and start container with USB device access:
```bash
docker run --device=/dev/ttyUSB0 <image_name> bash
```
or:
```bash
docker run --device=/dev/bus/usb/002/003 <image_name> bash
```


## Interacting with running containers

Go into a running container:
```bash
docker attach <container_id>
```
Detach from a running container from inside (without terminating): **Ctrl-P Ctrl-Q**

Go into a new shell of a running container:
```bash
docker exec -it <container_id> bash
```

## Image management

List all pulled images:
```bash
docker images
```

Delete old images (those that have the name `<none>`:
```shell
docker rmi $(docker images -a | grep "^<none>" | awk '{print $3}')
```

Export an image to a file, e.g. to transfer it to another computer: %% Source: https://stackoverflow.com/questions/23935141/how-to-copy-docker-images-from-one-host-to-another-without-using-a-repository %%
```bash
docker save -o some_name.tar <image_name>
```

Load an image from a file:
```shell
docker load -i some_name.tar
```
## Container management

List all available containers:
```bash
docker container ls -a
```

List all running containers:
```bash
docker ps
```

Delete a container:
```bash
docker rm <container-id>
```

Delete all stopped containers:
```bash
docker container prune
```

Copy files from container to host:
```bash
docker cp <container-id>:/file/path/within/container /host/path/target
```

Access bash of a running container:
```bash
docker exec -it <container-id> bash
```


## Clean-up

```
docker system prune
```
- Remove
    - all stopped containers
    - all networks not used by at least one container
    - all dangling images
    - dangling build cache
## Tutorials

- https://docker-curriculum.com
