<%*
let event_name_str = await tp.system.prompt("Event name")

title_str = tp.file.creation_date("YYYY-MM-DD ") + event_name_str

await tp.file.move("Calendar/" + tp.file.creation_date("YYYY-MM-DD HHmmss ") + "Event - " + event_name_str)
-%>
up:: [[Calendar]]
dates:: <% tp.file.creation_date("YYYY-MM-DD") %>
tags:: #log/event

---

# 🎉 <% title_str %>

# 📝 Minutes ❓❗️
- 

# 💪 Takeaways ✅
- 
- [ ] 
