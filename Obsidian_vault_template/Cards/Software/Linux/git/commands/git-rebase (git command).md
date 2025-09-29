up:: [[git commands MOC (git)]]
dates:: 2025-03-01
tags:: 

---
## TODO
- [ ] Maybe merge this note with [[Rebasing branches (git workflow)]]? At least separate the content more clearly.
## Also see
- [[Rebasing branches (git workflow)]]
- [[Rebase vs. Merge (git workflow)]]
- [[git-merge (git commands)]]
# git-rebase (git command)

Rebase `feature` onto `master`:
```bash
git rebase master feature
```
This *creates new commits* by replaying the changes from `feature` onto `master`. The old commits from `feature` will be kept, but are not part of any branch any more. They remain accessible via [[git-reflog (git command)|git reflog]].

## Ours and theirs

During a rebase, the `HEAD` is first set to the commit onto which we are rebasing. This means that when using `git checkout --ours path/to/file` or `git checkout --theirs path/to/file`:
- `--ours` always refers to the commit onto we are rebasing.
- `--theirs` always refers to the branch that is being rebased.


## Accidental `git commit` instead of `git rebase --continue`

It often happens that you accidentally `git commit` instead of `git rebase --continue`. In that case, simply do
```bash
git reset --soft HEAD~1
```
and then
```bash
git rebase --continue
```
That's it.

## Squashing

It is a little confusing, but squashing is done with the `git rebase` command.

Squashing the last `n` commits (this will remove `n` commits and create one new commit):
1. Start the interactive rebase with `git rebase -i HEAD~n`.
2. An editor will open. Change the word `pick` to `squash` for all but the first commit. *Attention: The first commit is at the top!*
3. Save and close the editor.

Instead of `HEAD~n` you can use a commit hash. *The commit for which the hash is provided will not be changed, it is the base for the rebase.*

**Tip**: You can try a *squash by first switching to a new branch*. Only if everything worked out, we delete the old branch and rename the new one.


## Considerations regarding rebasing
**PRO rebasing:**
- Allows for a linear history, which is much easier to work with.
- Very clean `master` branch.

**CON rebasing:**
- It rewrites history, changing the order in which things happened.

In general, you're allowed to *do whatever you want on your own branches*.

> [!Warning]
> - **Do never rebase a public branch onto anything else!** This changes the history of that branch for everyone and will cause a lot of problems for other developers.
> - **Never rebase in public**, always do it locally!

## Examples
### A simple rebase
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