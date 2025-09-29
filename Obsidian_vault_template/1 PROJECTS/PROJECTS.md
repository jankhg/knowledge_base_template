up:: [[Home]]
dates:: 2025-09-27
tags:: 

---

# Active PROJECTS
## Projects

```dataviewjs
var dataviewUtils = require(app.vault.adapter.basePath + "/assets/dataview/dataviewUtils.js");
let pages = dataviewUtils.getActiveProjects(dv);
dv.table(["Note", "Date"], pages.map(x => [x.file.link, x.dates]));
```

