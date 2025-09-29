up:: [[git]]
dates:: 2024-05-07
tags:: #note/stub

---
## Also see
- [[CR, LF, CR LF - Carriage return, line feed]]
# Configure git to properly handle line endings (git)

%% Source: https://docs.github.com/de/get-started/getting-started-with-git/configuring-git-to-handle-line-endings %%

We want the repository (remote) to use Linux style file endings (LF), not Windows style (CRLF).
## On Windows
Configure git to ensure line endings in files you checkout are correct for Windows. For compatibility, line endings are converted to Unix style when you commit files.
```shell
git config --global core.autocrlf true
```

## On Linux and macOS
On Linux and macOS, we do not want to have the line endings changed. I.e. use this:
```shell
git config --global core.autocrlf input 
```