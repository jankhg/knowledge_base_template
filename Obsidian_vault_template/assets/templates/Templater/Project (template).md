<%*
let name_str = await tp.system.prompt("Project name:");

var folder_str = name_str;
var title_str = name_str + " (project)";
var file_name_str = name_str + " (project)";

var path = require("path");
var dir = path.join("1 PROJECTS", folder_str);
console.log("dir: ", dir);
console.log(`await tp.file.exists(dir) = ${await tp.file.exists(dir)}`);

if (!(await tp.file.exists(dir))) {
    console.log("Folder not yet present. Creating...");
    await this.app.vault.createFolder(dir);
    await tp.file.move(path.join(dir, title_str));
}
else {
    console.log("A project with this name already exists. File not moved.");
}
-%>
up:: [[PROJECTS]]
dates:: <% tp.file.creation_date("YYYY-MM-DD") %>
tags:: #type/project 

---

# <% title_str %>

## Status
- 

## Next
- 

## Open Questions
- 



```dataviewjs
var dataviewUtils = require(app.vault.adapter.basePath + "/assets/dataview/dataviewUtils.js");
dataviewUtils.projectQueries(dv, dv.current().file.name);
```
