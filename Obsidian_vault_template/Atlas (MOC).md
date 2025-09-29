up:: [[Home]]
dates:: 2025-09-27
tags:: 

---

# 🌍 Atlas (MOCs)

Remember what a [[Map Of Content (MOC)|MOC]] is.

```dataviewjs
let pages = dv.pages('!"assets" and #type/moc')
pages = pages.where(p => p.file.name != dv.current().file.name);
pages = pages.sort(x => x.file.name);
dv.table(["Note", "Date"], pages.map(x => [x.file.link, x.dates]));
```
