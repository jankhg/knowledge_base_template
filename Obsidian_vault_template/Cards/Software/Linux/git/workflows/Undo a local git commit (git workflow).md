up:: [[git workflows MOC (git)]]
dates:: 2025-01-15
tags:: 

---

# Undo a local git commit (git workflow)

## Undo a local commit that was not yet pushed
%% Source: https://stackoverflow.com/questions/927358/how-do-i-undo-the-most-recent-local-commits-in-git %%
```bash
$ git commit -m "Something terribly misguided" # (0: Your Accident)
$ git reset HEAD~                              # (1)
```

