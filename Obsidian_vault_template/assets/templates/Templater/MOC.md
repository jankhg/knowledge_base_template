<%*
let moc_name_str = await tp.system.prompt("MOC name")

title_str = moc_name_str + " (MOC)"

await tp.file.move("0 INBOX/" + title_str)
-%>
up:: [[Atlas (MOC)]]
dates:: <% tp.file.creation_date("YYYY-MM-DD") %>
tags:: #type/moc

---

# 🗺️ <% title_str %>

