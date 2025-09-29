up:: [[git workflows MOC (git)]]
dates:: 2025-01-27
tags:: #note/stub

---

# git rebase (git workflow)

## General considerations
**PRO rebasing:**
- Allows for a linear history, which is much easier to work with.
- Very clean `master` branch.

In general, you're allowed to do whatever you want on your own branches.

**WARNING:**
- **Do never rebase a public branch onto anything else! This changes the history of that branch for everyone and will cause a lot of problems for other developers.**
- **Never rebase in public, always do it locally!**

## Commands

I prefer rebasing over merging to keep a clean history. See [[Rebase vs. Merge (git workflow)]].

To rebase the branch `feature` onto `master` do the following:
```bash
git checkout master && git pull
```

```bash
git checkout feature && git pull
```

```bash
git rebase origin/master
```

Afterwards, we need to push. However, a simple `git push` will give an error and tell us about diverged remote and local branches, which is expected. Therefore, we have to do
```bash
git push --force-with-lease
```
This still throws an error in case someone pushed something in the meantime.

If other machines did also work on branch `feature`, their local branch `feature` has now diverged from `origin/feature`.
This can be fixed via
```bash
git reset --hard origin/feature
```


## Examples
### Example 1 (rebase of cascaded branches)
I tested the following:
```
* B (main)
| * D (branch_2)
| * C (branch_1)
|/
* A
```
then
```bash
git rebase main branch_2
git checkout branch_2
git push -f
```
will lead to
```
* D' (branch_2)
* C'
* B (main)
| * C (branch_1)
|/
* A
```

Which is not so nice.
### Example 2 (rebase of cascaded branches with `--update-refs`)
I tested the following:
```
* B (main)
| * D (branch_2)
| * C (branch_1)
|/
* A
```
then
```bash
git rebase --update-refs main branch_2
git checkout branch_1
git push --force-with-lease
git checkout branch_2
git push --force-with-lease
```
will lead to
```
* D (branch_2)
* C (branch_1
* B (main)
* A
```
Which is quite nice!

### Example 3

```
* B (main)
| * E (branch_3)
| | * D (branch_2)
| |/
| * C (branch_1)
|/
* A
```
Then
```bash
git rebase --update-refs main branch_2
```
leads to
```
* D (branch_2)
* C (branch_1)
* B (main)
| * E (branch_3)
| * C'
|/
* A
```
so `C` now exists twice.
Now doing
```bash
git rebase main branch_3
```
leads to
```
* E (branch_3)
* C'
| * D (branch_2)
| * C (branch_1)
|/
* B (main)
* A
```
so we still have C two times.
However, if we now do
```bash
git rebase branch_2 branch_3
```
we get
```
* E (branch_3)
* D (branch_2)
* C (branch_1)
* B (main)
* A
```
where `C'` vanished. This is very nice!
## Open questions

### Question 1 (squashing)

#### Scenario
```
* E (branch_2)
* D
* C (branch_1)
* B
* A (main)
```

How to get to this goal?
```
* G (main) squashes D & E
* F squashes B & C
* A
```


### Question 2 (rebasing)
#### Scenario
```
* B (main)
| * E (branch_3)
| | * D (branch_2)
| |/
| * C (branch_1)
|/
* A
```

Goal:
```
* E (branch_3)
| * D (branch_2)
|/
* C (branch_1)
* B (main)
* A
```
#### Approach
Easiest is probably to do
```
git rebase branch_2 branch_3
```
leading to
```
* B (main)
| * E (branch_3)
| * D (branch_2)
| * C (branch_1)
|/
* A
```
and then
```
git rebase --update-refs main branch_3
```
which should lead to
```
* E (branch_3)
* D (branch_2)
* C (branch_1)
* B (main)
* A
```

Don't forget to force push all branches.

## Building test repo 1

Scenario:
```
* B (master)
| * D (branch_2)
| * C (branch_1)
|/
* A
```

Specifically, `branch_1` and `branch_2` made changes on the same files and lines. The rebase procedure shall not make me solve any merge conflicts.

A:
```
Line 1 from main.

```
Commands:
```
git add . && git commit -m "A"
```

C:
```
Line 1 from main.

Line 2 from branch_1.
```
Commands:
```bash
git checkout -b branch_1 && git add . && git commit -m "C"
```

D:
```
Line 1 from main.

Line 2 from branch_1. With changes from branch_2.
```
Commands:
```bash
git checkout -b branch_2 && git add . && git commit -m "D"
```

B:
Commands:
```bash
git checkout main
```
File:
```
Line 1 from main. With changes from main.

```
Commands:
```bash
git add . && git commit -m "B"
```

Push everything:
```bash
git checkout main
git push
git checkout branch_1
git push --set-upstream origin branch_1
git checkout branch_2
git push --set-upstream origin branch_2
```
