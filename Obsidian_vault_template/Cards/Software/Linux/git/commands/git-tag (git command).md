up:: [[git commands MOC (git)]]
dates:: 2025-03-07
tags:: 

---

# git-tag (git command)


| Command                                      | Description                                                                     |
| -------------------------------------------- | ------------------------------------------------------------------------------- |
| `git tag`                                    | *List* all current tags. Use option `-n1` to show one line of each tag message. |
| `git tag -v <tagname>`                       | *Show* many details for an existing tag.                                        |
| `git tag -a "<tag_name>" -m "<tag_message>"` | *Add* a tag to the current commit.                                              |
| `git tag -d <tag_name>`                      | *Delete* a tag.                                                                 |
| `git push origin --tags`                     | *Push* all tags to `origin`. **Not recommended!**                               |
| `git push origin tag <tag_name>`             | *Push* a single tag. Recommended way of pushing tags.                           |

Further options:
- `-f, --force` : Replace an existing tag.

## Examples
Create a tag named `v3.10.2` to tag the release with the [[semantic versioning, semver]] `3.10.2`:
```bash
git tag -a v3.10.2 -m "Release version 3.10.2"
```

