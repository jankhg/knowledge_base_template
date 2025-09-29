up:: [[Linux commands]]
dates:: 
tags:: 

---

# perf (linux command)

## General information

- perf stands for **performance event counter**
- perf does not provide exact information, because it guesses a lot.
- Tutorial: https://github.com/NAThompson/performance_tuning_tutorial

## Installation on Ubuntu
```bash
sudo apt install linux-tools-common
sudo apt install linux-tools-generic
sudo apt install linux-tools-`uname -r`
```

Also install the dependencies:
```bash
sudo apt install -y bison flex libslang2-dev systemtap-sdt-dev libnuma-dev libcap-dev libbabeltrace-ctf-dev libiberty-dev python-dev
```

## Usage

### Simple statistics

Assume we want to analyze the program `bench`.
Compile the program (C++) with the flag `-fno-omit-frame-pointer`, which should not impact performance significantly.
To get some high level information, use
```bash
perf stat -d ./bench
```
- `-d` : Detailed output. Should always be used.

To get more detailed information, use
```bash
perf record ./bench
perf report
```


### Detailed information about the called functions

Compile with these compiler flags:
- `-O0` : No optimizations
- `-fno-omit-frame-pointer` : 
Then run this command to record:
```bash
perf record -g ./bench
```

In case the process is already running, use this command:
```bash
perf record -g -p <pid>
```

Run this command to visualize the recording:
```bash
perf report -g 'graph,0.5,caller'
```
Options:
- `-g`
    - `graph` : Keeps all percentages normalized to the total program. Otherwise they are always normalized to the current function.
    - `0.5` : Filter
    - `caller` : Inverts the caller/callee graph ordering. With this option, each function has below a list of functions that are called by it.

Hit key 'a' to annotate a function.

## Interpreting `perf stat -d`
- Branch mispredictions (branch misses) 
    - 1% is still very bad %% According to https://www.youtube.com/watch?v=g-WPhYREFjk %% 

