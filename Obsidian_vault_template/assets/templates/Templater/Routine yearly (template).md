<%*
let title_str = tp.file.creation_date("YYYY ") + "Yearly Routine";

let this_year_str = tp.file.creation_date("YYYY");
let prev_year_str = (parseInt(this_year_str) - 1).toString();
let next_year_str = (parseInt(this_year_str) + 1).toString();

let filename_str = tp.file.creation_date("YYYY-MM-DD ") + "yearly routine";

await tp.file.move("Calendar/" + filename_str);
-%>
up:: [[Calendar]]
dates:: <% tp.file.creation_date("YYYY-MM-DD") %>
tags:: #log/routine/yearly 

---

## 🕤 Before
```dataviewjs
let max_amount = 5;

let pages = dv.pages('"Calendar" and #log/routine/yearly')
    .where(p => p.file.name < dv.current().file.name)
    .sort(x => -x.dates)
    .slice(0, max_amount)
    .sort(x => x.dates);
dv.table(["Note", "Date"], pages.map(x => [x.file.link, x.dates]));
```

---
---

# 🧹 <% title_str %>

# 📝 Review

## What spontaneously comes to mind
- 


## Summary of the <% prev_year_str %> review
- 


## What happened <% this_year_str %>
- 


## Topics that I dived into
- 

## These things moved me
- 

## Review of <% this_year_str %>
- **What did I want to do / achieve / change / focus on?**
    - 
- **How well did that work out?**
    - 
- **Why?**
    - 




## 🎯 Goals

### For <% next_year_str %>
- 


### For the next 3 years
- 


### For the next 10 years
- 


### For the next 30 years
- 


## Appointments / tasks for <% next_year_str %>
- 


---


# 💪 Tasks

### Backups
- [ ] Backup laptop files


---

# 🚀 Takeaways ✅
- 
- [ ] 


---
---

## 🕞 After
```dataviewjs
let max_amount = 5;

let pages = dv.pages('"Calendar" and #log/routine/yearly')
    .where(p => p.file.name > dv.current().file.name)
    .sort(x => x.dates)
    .slice(0, max_amount);
dv.table(["Note", "Date"], pages.map(x => [x.file.link, x.dates]));
```