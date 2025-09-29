up:: [[Calendar]]
dates::  <% tp.file.creation_date("YYYY-MM-DD") %>
tags:: #log/daily

---
# 🌞  <% tp.file.creation_date("YYYY-MM-DD") %> Daily

## 💪 Tasks✅👬
- [ ] 


## 📝 Minutes❓❗️
- 

---
```dataviewjs
try {
    // Doesn't work on iPhone, so this try-catch-block suppresses the error message.
    var dataviewUtils = require(app.vault.adapter.basePath + "/assets/dataview/dataviewUtils.js");
    dataviewUtils.dailyNoteHeader(dv, dv.current().file.name.slice(0, 10));
}
catch (error) {
}
```
---
# 💪 Tasks done today
```tasks
done <% tp.file.creation_date("YYYY-MM-DD") %>
```

# 📆 Notes created today

```dataview
TABLE
WHERE
    file.cday = date(this.file.name) AND file.name !=(this.file.name)
SORT
    file.folder ASC, file.name ASC
```
