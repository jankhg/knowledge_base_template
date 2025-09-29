<%*
let title_str = tp.file.creation_date("YYYY-MM ") + "Monthly Routine";

let filename_str = tp.file.creation_date("YYYY-MM-DD ") + "monthly routine";

await tp.file.move("Calendar/" + filename_str);
-%>
up:: [[Calendar]]
dates:: <% tp.file.creation_date("YYYY-MM-DD") %>
tags:: #log/routine/monthly 

---

## 🕤 Before
```dataviewjs
let max_amount = 5;

let pages = dv.pages('"Calendar" and #log/routine/monthly')
    .where(p => p.file.name < dv.current().file.name)
    .sort(x => x.dates)
    .slice(0, max_amount);
dv.table(["Note", "Date"], pages.map(x => [x.file.link, x.dates]));
```

---
---

# 🧹 <% title_str %>

## 📌 Tasks
- [ ] Take a walk

## Backups
- [ ] Backup PhD thesis


# 🚀 Takeaways ✅
- 
- [ ] 


---
---

## 🕞 After
```dataviewjs
let max_amount = 5;

let pages = dv.pages('"Calendar" and #log/routine/monthly')
    .where(p => p.file.name > dv.current().file.name)
    .sort(x => x.dates)
    .slice(0, max_amount);
dv.table(["Note", "Date"], pages.map(x => [x.file.link, x.dates]));
```