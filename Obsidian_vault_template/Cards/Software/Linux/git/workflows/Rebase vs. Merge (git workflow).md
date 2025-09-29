up:: [[git workflows MOC (git)]]
dates:: 2023-05-04
tags:: #note/stub 

---
## Also see
- [[Rebasing branches (git workflow)]] contains more examples for rebasing
- [[git-rebase (git command)]]
- [[git-merge (git commands)]]

# Rebase vs. Merge (git workflow)


## Examples
### Merging with merge commit
We start with this branch structure:
```
  * C (feature)
* | B (master)
|/
* A
```
Then we merge branch `feature` into branch `master`:
```bash
git switch master
git merge feature
```
which results in:
```
D (master)
|\
| * C (feature)
* | B
|/
* A
```
Note, that a new commit `D` was created.

### Fast-forward merge
We start with this branch structure:
```
  * C (feature)
  * B
 /
* A (master)
```
Then we merge branch `feature` into branch `master`:
```bash
git switch master
git merge feature
```
This only needs to move the pointer of branch `master` to commit `C`. No new commit is created.
```
* C (master) (feature)
* B
* A
```
The merged branch can be deleted (it's just a pointer to a commit):
```bash
git branch -d feature
```

### Rebasing

We start with this branch structure:
```
  * C (feature)
* | B (master)
|/
* A
```
Then we rebase branch `feature` onto branch `master`:
```bash
git rebase master feature
```
which results in:
```
* C' (feature)
* B (master
* A
```
Note, that commit `C'` has another hash than commit `C`.

## Gitlab settings
* Settings
    * Merge requests
        * Merge method: `Fast-forwrad merge`
        * Merge options
            * Enable `Enable "Delete source branch" option by default`
        * Squash commits when merging: `Require`