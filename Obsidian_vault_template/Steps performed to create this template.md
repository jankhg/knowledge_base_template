
up:: [[Home]]
dates:: 2025-09-27
tags:: 

---

# Steps performed to create this template

- Created the folder structure
- Added the files under `assets/templates/Templater/`
- Added the files under `assets/dataview/`
- Added the files under `.obsidian/snippets/`
- Go to *Settings* -> *Core plugins* -> Enable the following plugins
    - *Footnotes view*
    - *Workspaces*
- Go to *Settings* -> *Community plugins*
    - Click *Turn on community plugins*
	- *Browse* -> Install the following Plugins
		- *Dataview* by Michael Brenan
		- *Templater* by SilentVoid
		- *Tasks* by Clare Macrae
		- *File Explorer Note Count* by Ozan Tellioglu
	- Enable these plugins
- Go to *Settings* -> *Editor*
    - *Default view for new tabs*: *Reading view*
    - *Readable line length*: *Disable*
    - *Properties in document*: *Hidden*
    - *Auto-pair brackets*: *Disable*
    - *Indent using tabs*: *Disable*
- Go to *Settings* -> *Files and links*
    - *Delete files*: *Move to Obsidian trash (.trash folder)*
    - *Automatically update internal links*: *Enable*
    - *Default location for new notes*: *In the folder specified below*
    - *Folder to create new notes in*: `0 INBOX`
    - *Default location for new attachments*: *In the folder specified below*
    - *Attachment folder path*: `assets/pasted`
    - *Base color theme*: *Dark*
    - *Themes* -> *Manage* -> Install *LYT Mode* by nickmilo
    - *Show inline title*: *Disable*
    - *CSS snippets*: Click reload
    - Activate all CSS snippets*
- Go to *Settings* -> *Hotkeys*
    - *Add internal link*: Ctrl+K
    - *Create new note*: Delete shortcut
    - *Daily notes: Open today's daily note*: Ctrl+D
    - *Delete paragraph*: Delete shortcut
    - *Insert markdown link*: Delete shortcut
    - *Move current file to another folder*: Ctrl+Shift+M*
    - *Rename file*: Remove shortcut and set to Ctrl+L
    - *Search & replace in current file*: Remove shortcut
    - *Table: Move row down*: Ctrl+Shift+D
    - *Table: Move row up*: Ctrl+Shift+U
    - *Toggle checkbox status*: Remove shortcut and set to Ctrl+Shift+L
    - *Toggle highlight*: Ctrl+H*
    - *Toggle left sidebar*: Ctrl+Shift+B
- Go to *Settings* -> *Core plugins* -> *Daily notes*
    - Set *New file location* to `Calendar
- Go to *Settings* -> *Core plugins* -> *File recovery*
    - Set *History length* to `365`
- Go to *Settings* -> *Community plugins* -> *Templater*
	- Set *Template folder location* to `assets/templates/Templater`
	- Turn on *Automatic jump to cursor*
	- Turn on *Trigger Templater on new file creation*
	- Turn on *Enable folder templates*
	- Add these new folder templates:
	  - Add item `/` with template `assets/templates/Templater/Templater (auto)/zzz + New (auto).md`
	  - Add item `Calendar` with template `assets/templates/Templater/Templater (auto)/zzz daily (auto).md`
  - Go to *Settings* -> *Community plugins* -> *Tasks*
      - *Global filter*: `#task`
      - *Remove global filter from description*: Enable
      - *Auto-suggest task content*: Disable
  - Go to *Settings* -> *Community plugins* -> *Dataview*
      - *Enable inline queries*: *Enabled*
      - *Enable JavaScript queries*: *Enabled*
      - *Date format*: `yyyy-MM-dd`
      - *Date + time format*: `yyyy-MM-dd hh:mm`
      - *Automatic task completion tracking*: *Enabled*
      - *Use emoji shorthand for completion*: *Enabled*
