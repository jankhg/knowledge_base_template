<%*
var dataviewUtils = require(app.vault.adapter.basePath + "/assets/dataview/dataviewUtils.js");
const dv = this.app.plugins.plugins["dataview"].api;
project_str_list = dataviewUtils.getNamesOfActiveProjects(dv);

let project_str = await tp.system.suggester(project_str_list, project_str_list);
let meeting_title_str = await tp.system.prompt("Meeting title");

title_str = tp.file.creation_date("YYYY-MM-DD ") + project_str + ": " + meeting_title_str;

await tp.file.move("Calendar/" + tp.file.creation_date("YYYY-MM-DD HHmmss ") + "Meeting - " + project_str + " - " + meeting_title_str);
-%>
up:: [[Calendar]]
dates:: <% tp.file.creation_date("YYYY-MM-DD") %>
tags:: #log/meeting/project [[<% project_str %>]]

---

## 🕤 Before
```dataviewjs
let max_amount = 5;

let pages = dv.pages('"Calendar" and #log/meeting/project')
    .where(x => x['tags'].includes('[[<% project_str %>]]'))
    .where(p => p.file.name < dv.current().file.name)
    .sort(x => -x.dates)
    .slice(0, max_amount)
    .sort(x => x.dates);
dv.table(["Note", "Date"], pages.map(x => [x.file.link, x.dates]));
```

---
---

# 👬 <% title_str %>

## 🎯 Goal


## 📌 Agenda
- [ ] 

# 📝 Minutes ❓❗️
- 

# 🚀 Takeaways ✅
- 
- [ ] 

---
---

## ➡️ Postponed
- [ ] 

## 🕞 After
```dataviewjs
let max_amount = 5;

let pages = dv.pages('"Calendar" and #log/meeting/project')
    .where(x => x['tags'].includes('[[<% project_str %>]]'))
    .where(p => p.file.name > dv.current().file.name)
    .sort(x => x.dates)
    .slice(0, max_amount);
dv.table(["Note", "Date"], pages.map(x => [x.file.link, x.dates]));
```

