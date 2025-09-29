up:: [[man gitworkflows]]
dates:: 2025-02-21
tags:: 

---

# git remove commit locally and on origin (git workflows)

We assume that we want to remove one commit on the `master` branch.
Delete the last commit locally:
```bash
git checkout master
git reset HEAD~1
git reset --hard
```
- Replace `1` by another number to go back more than one commit.

Then push to `origin` to replace the origin branch with the local one:
```bash
git push -f origin master
```
It might be necessary to change the GitLab settings to allow `--force` (`-f`) on the master branch.

## Alternative: Setting a remote branch to another (previous) commit
I did not test this yet.

```bash
git push -f origin last_known_good_commit:branch_name
```