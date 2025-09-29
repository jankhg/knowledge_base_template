<%*
let title_str = tp.file.creation_date("YYYY-MM-DD ") + "Weekly Routine";

let filename_str = tp.file.creation_date("YYYY-MM-DD ") + "weekly routine";

await tp.file.move("Calendar/" + filename_str);
-%>
up:: [[Calendar]]
dates:: <% tp.file.creation_date("YYYY-MM-DD") %>
tags:: #log/routine/weekly 

---

## 🕤 Before
```dataviewjs
let max_amount = 5;

let pages = dv.pages('"Calendar" and #log/routine/weekly')
    .where(p => p.file.name < dv.current().file.name)
    .sort(x => x.dates)
    .slice(0, max_amount);
dv.table(["Note", "Date"], pages.map(x => [x.file.link, x.dates]));
```

---
---

# 🧹 <% title_str %>

---
## Planning for next week

### 🎯 Goals for next week
- [ ] *Goal 1:* 
    - 
- [ ] *Goal 2:* 
    - 
- [ ] *Goal 3:* 
    - 

### 📌 Tasks for next week
- [ ] 

### 🚀 Takeaways from next week
- 


---
---
## 📌 Regular tasks
- [ ] Take a walk


---
---

## 🕞 After
```dataviewjs
let max_amount = 5;

let pages = dv.pages('"Calendar" and #log/routine/weekly')
    .where(p => p.file.name > dv.current().file.name)
    .sort(x => x.dates)
    .slice(0, max_amount);
dv.table(["Note", "Date"], pages.map(x => [x.file.link, x.dates]));
```