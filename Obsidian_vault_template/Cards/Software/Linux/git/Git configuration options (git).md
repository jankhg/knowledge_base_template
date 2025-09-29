up:: [[git]]
dates:: 2025-03-10
tags:: 

---

# Git configuration options (git)

## Rerere
Reuse recorded resolution (rerere) records how you resolve merge and rebase conflicts. When the exact same conflict appears again, the recorded resolution is automatically applied. This can be very useful in multiple workflows.

*Enable* rerere:
```bash
git config rerere.enabled true
```

*Delete* the rerere cache:
```bash
rm -rf .git/rr-cache
```