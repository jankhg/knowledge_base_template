up:: 
dates:: 2025-09-27
tags:: 

---

# START HERE

This is an Obsidian template configured more or less in the way that I use Obsidian.
If you want to create your own vault, I recommend that you start from scratch and configure it just as you need it.
However, this template might serve as an inspiration and to get a feeling for what a customized vault might feel like.
All steps needed to reproduce the configuration of this template vault are listed in [[Steps performed to create this template]].

The following notes might be interesting for you:
- [[Steps performed to create this template]]
- [[Atlas (MOC)]]
- [[Obsidian notes formatting]]
    - Obsidian uses Markdown for notes formatting. All notes are stored as files on the hard drive, easily accessible and ready to migrate to another application, in case you decide to do so in the future.

## Quick start
- Press *Ctrl+O* to search for notes by name. I put a couple of files in this vault for you to get a feeling of how it feels like to use a populated vault.
- Create a new note by pressing *Ctrl+N*. Select *+ Note*, enter a title, and start writing
- Add internal links by pressing *Ctrl+K* and then searching by title
- Create a new project:
    - Press *Ctrl+N* -> Select *Project (template)* -> Enter project name "ECOC 2025"
    - Have a look at the note [[PROJECTS]]. The list automatically updated and now shows the new project.
- Create a new meeting note for the project "ECOC 2025":
    - Press *Ctrl+N* -> Select *Meeting Project (template)* -> Enter the meeting name "Kick-Off"
    - Open the ECOC project note: *Ctrl+O*. You should see an automatically created link to the meeting note.
- Create a daily note: Ctrl+D
- Open the graph via Ctrl+G


## Diving deeper
- All note templates, that are available when pressing *Ctrl+N*, are located in the folder `assets/templates/Templater`.
    - Try modifying them.
    - The templates contain sections enclosed in `<%* and -%>` and parts like `<% title_str %>`. These are used by the *Templater* plugin and are processed when a new note is created.
- Obsidian uses web technology for rendering, it is essentially a browser. Everything you see is rendered using CSS, and you can even use Javascript.
    - Custom CSS snippets allow you to modify some aspects of the appearance. You find them in `.obsidian/snippets` (Open with File Explorer, as this folder is not visible from inside Obsidian.)
- Obsidian allows for heavy customization. Have a look, e.g., on Youtube, to get inspired.


## If you want to use this template
- [ ] In the file `assets/dataview/dataviewUtils.js`, replace all occurrences of `John Doe` with your name. This allows to automatically filter tasks assigned to you.