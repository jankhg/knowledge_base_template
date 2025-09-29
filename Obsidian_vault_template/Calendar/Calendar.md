up:: [[Home]]
dates:: 
tags:: 

---

# 📆 Calendar

## Last 5 dailies
```dataviewjs
let max_amount = 5;

let pages = dv.pages('"Calendar" and #log/daily')
    .sort(x => -x.dates)
    .slice(0, max_amount);
dv.table(["Note"], pages.map(x => [x.file.link]));
```

## Last 10 meetings
```dataviewjs
let max_amount = 10;

let pages = dv.pages('"Calendar" and #log/meeting')
    .sort(x => -x.dates)
    .slice(0, max_amount);
dv.table(["Note", "Date"], pages.map(x => [x.file.link, x.dates]));
```

## Last 10 events
```dataviewjs
let max_amount = 10;

let pages = dv.pages('"Calendar" and #log/event')
    .sort(x => -x.dates)
    .slice(0, max_amount);
dv.table(["Note", "Date"], pages.map(x => [x.file.link, x.dates]));
```

## Last 4 Weekly Routines
```dataviewjs
let max_amount = 4;

let pages = dv.pages('"Calendar" and #log/routine/weekly')
    .sort(x => -x.dates)
    .slice(0, max_amount);
dv.table(["Note", "Date"], pages.map(x => [x.file.link, x.dates]));
```

## Last 12 monthly routines
```dataviewjs
let max_amount = 12;

let pages = dv.pages('"Calendar" and #log/routine/monthly')
    .sort(x => x.dates)
    .slice(0, max_amount);
dv.table(["Note", "Date"], pages.map(x => [x.file.link, x.dates]));
```


## Last 3 yearly routines
```dataviewjs
let max_amount = 3;

let pages = dv.pages('"Calendar" and #log/routine/yearly')
    .sort(x => -x.dates)
    .slice(0, max_amount);
dv.table(["Note"], pages.map(x => [x.file.link]));
```
