<%*
let meeting_title_str = await tp.system.prompt("Meeting title");

title_str = tp.file.creation_date("YYYY-MM-DD ") + meeting_title_str;

await tp.file.move("Calendar/" + tp.file.creation_date("YYYY-MM-DD HHmmss ") + "Meeting - " + meeting_title_str);
-%>
up:: [[Calendar]]
dates:: <% tp.file.creation_date("YYYY-MM-DD") %>
tags:: #log/meeting 

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
