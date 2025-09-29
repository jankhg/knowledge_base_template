up:: [[git commands MOC (git)]]
dates:: 2025-02-07
tags:: 

---
# git-stash (git command)

`git stash` stores all working tree and index changes into a LIFO stack data structure. The working tree is afterwards on the state that `HEAD` points to.
This is very convenient for pausing some work and resuming later.

| Command                                  | Usage                                                                                                                                 |
| :--------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `git stash`                              | *Stash away* all current changes. Equivalent to `git stash push`                                                                      |
| `git stash push filename.ext`            | Push *one file* to the stash.                                                                                                         |
| `git stash push -m "Hello" file.ext`     | Push and *add a message*.                                                                                                             |
| `git stash pop [<i>]`                    | *Apply* previously stashed changes *and remove* state from stash list. The stash index can be given as an argument.                   |
| `git stash apply [<i>]`                  | Like `git stash pop`, but does not remove the state from the stash list.                                                              |
| `git stash drop <i>`                     | *Delete* a stash entry.                                                                                                               |
| `git stash list`                         | *List* all stash entries                                                                                                              |
| `git stash show [<i>]`                   | *Show* which files get changed by the stash entry                                                                                     |
| `git stash show [<i>] -p > bugfix.patch` | Save a stash entry as a *patchfile*. It can then be applied via `git apply bugfix.patch` (see [[git-apply (git command)\|git apply]]) |

If `git stash pop` fails with conflicts, you need to solve these by hand. The state remains in the stash list and has to be removed manually using `git stash drop <i>`.



