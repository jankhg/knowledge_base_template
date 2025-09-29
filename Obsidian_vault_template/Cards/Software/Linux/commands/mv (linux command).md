up:: [[mv (linux command)]]
dates:: 2023-01-11
tags:: 

---

# mv (linux command)

Rename a file or folder:
```bash
mv old_name new_name
```
- Do not add a `/` behind `old_name`! %% Source: https://stackoverflow.com/questions/18158248/should-i-put-trailing-slash-after-source-and-destination-when-copy-folders#:~:text=If%20you%20want%20to%20move,slash%20to%20the%20destination%20directory. %%

Move a file or folder to another directory:
```bash
mv /path/file /new/path/
```
- This moves the file from `/path/file` to `/new/path/file`
- Only difference to renaming is given by the trailing `/` of the target path.

Move all files from within a folder to a subfolder:
```shell
ls -a | grep -v new | xargs mv -t new
```
- `-a` : Include hidden files
- `| grep -v new` : exclude the folder `new` itself
- `| xargs mv -t new` : Move all filenames from pipe to folder `new`