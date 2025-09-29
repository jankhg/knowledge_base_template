up:: [[git commands MOC (git)]]
dates:: 2025-02-28
tags:: 

---
## Also see
- [[Git configuration options (git)]]
# git-config (git command)

The git configuration is either stored
- System: `/etc/gitconfig`
- Global (user): `~/.gitconfig`
- Local (repository): `.git/config`
- Worktree (subfolder): `.git/config.worktree
Local overrites globals, etc.

The configuration is basically a key-value store. You can store data that is not used by git.
Multiple keys of the same name can exist in config files, but only the last one is respected by git.

*Edit* the *global* git config file in an editor:
```bash
git config --global --edit
```

*Edit* the *local* git config file in an editor:
```bash
git config --edit
```

*Add* a key-value pair:
```bash
git config --add --local <section>.<keyname> <value>
```

*List* the whole configuration
```bash
git config --list --local
```
- Lists all entries from `.git/config`.
- Replace `--local` by `--global` to get the configuration from `~/.gitconfig`.

*Get* a key value pair:
```bash
git config --get <key>
```
where `<key>` is `<section>.<keyname>`

*Set* a key value pair:
```bash
git config --set <key> <value>
```

*Delete* a key value pair:
```bash
git config --unset <key>
```
- In case multiple values were stored for the same key (`<section>.<keyname>`), only the last one is deleted.

*Delete* all key value pairs for a given key (`<section>.<keyname>`):
```bash
git config --unset-all <key>
```

*Remove* a complete section with all its contained key value pairs:
```bash
git config --remove-section <section>
```

## Often used configuration options
### Set user config
```bash
git config --global user.name "<first_name> <last_name>"
git config --global user.email "your@mail.com
```

### Change the default branch name
```bash
git config --global init.defaultBranch <default_branch_name>
```
where typically `<default_branch_name>` is `master` or `main`.

### Tread titlecase changes of filenames as changes, also on case-insensitive filesystems

%% Source: https://stackoverflow.com/questions/17683458/how-do-i-commit-case-sensitive-only-filename-changes-in-git %%

```shell
git config core.ignorecase false
```

### Credentials

- Dislable usage of credential manager on Windows (always ask for password):
    - `git config --edit --system`
    - Under `[credential]` remove the line `helper = manager`
- Use Ubuntu keychain:
    - `git config --global credential.helper store`