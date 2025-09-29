<%*
let title_str = await tp.system.prompt("Card title")

await tp.file.move("0 INBOX/" + title_str)
-%>
up:: 
dates:: <% tp.file.creation_date("YYYY-MM-DD") %>
tags:: #note/stub

---

# <% title_str %>

