up:: [[git commands MOC (git)]]
dates:: 2022-12-11
tags:: 

---

# git-submodule (git command)

## Adding a submodule

```bash
mkdir submodules
cd submodules
git submodule add <https://gitlab-address.de/path/to/repository.git>
```

## Loading submodules after cloning a repository with submodules
Do this in the main repository root folder:
```bash
git submodule update --init
```
or
```bash
git submodule init
git submodule update
```

## Removing a submodule

Source: https://stackoverflow.com/a/7646931/5614968

1. List all initialized submodules:

```bash
git submodule
```

2. Remove config entries:

```bash
git config -f .git/config --remove-section submodule.$submodulename
git config -f .gitmodules --remove-section submodule.$submodulename
```

3. Remove directory from index:

```bash
git rm --cached $submodulepath
```

4. Commit

5. Delete unused files:

```bash
rm -rf $submodulepath
rm -rf .git/modules/$submodulename
```

`$submodulepath` doesn't contain leading or trailing slashes.
