up:: [[git commands MOC (git)]]
dates:: 2025-03-05
tags:: 

---

# git-bisect (git command)

Efficiently find a commit that introduced a change, using bisecting

Very useful to identify the commit that introduced a bug or performance regression.

There are effectively 7 steps to bisecting:
1. Start the bisect with `git bisect start`.
2. Select a "good" commit with `git bisect good <commitish>` (a commit where you're sure the bug wasn't present).
3. Select a bad commit via `git bisect bad <commitish>` (a commit where you're sure the bug was present).
4. Git will checkout a commit between the good and bad commits for you to test to see if the bug is present.
5. Execute `git bisect good` or `git bisect bad` to say the current commit is good or bad.
6. Loop back to step 4 (until `git bisect` completes).
7. Exit the bisect mode with `git bisect reset`.


## Scripted bisecting

Let's say we want to check at which commit `<search_tearm>` was introduced into `path/to/file`.
We can then create a script
```bash
# bisect.sh
if grep -q "<search_term>" "path/to/file"; then
    exit 1
else
    exit 0
fi
```
- So, if the script returns `0`, it means *good* (`git bisect good`).

And do the bisect this way:
Start the bisect with `git bisect start`.
1. Select a "good" commit with `git bisect good <commitish>` (a commit where you're sure the bug wasn't present).
2. Select a bad commit via `git bisect bad <commitish>` (a commit where you're sure the bug was present).
3. Run `git bisect run ./bisect.sh`.
4. Exit the bisect mode with `git bisect reset`.