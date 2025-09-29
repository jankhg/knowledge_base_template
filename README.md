# Obsidian + Zotero knowledge base template

## Obsidian

- Download and install [Obsidian](https://obsidian.md).
- Download and extract this GitHub repository.
- Start *Obsidian*.
- Under "Open folder as vault", choose the folder `Obsidian_vault_template`.


## Zotero

- Download and install [Zotero](https://www.zotero.org/).
- If you use LaTeX:
  - Install the "Better BibTex" plugin by following [these instructions](https://retorque.re/zotero-better-bibtex/installation/index.html).
- Copy the file `Zotero/Markdown.Item.URI.js` to the translators folder:
    - Windows: `C:\Users\<User Name>\Zotero\translators`
    - macOs: `/Users/<username>/Zotero`
    - Linux: `~/Zotero`
- I slightly adapted this file from [here](https://github.com/silentdot/zotero-markdown-translator) to better suit my taste.
- Go to *Edit* -> *Settings* -> *Export*
  - Item format:
    - Choose "Better BibTeX", if you want to export BibTeX citations.
    - Choose "Mardown Item URI", if you want to export a link to Zotero. Do this for now.
- Put some item into Zotero, mark it, press Ctrl+Shift+C
- Paste into Obsidian. If you click on that link now, Zotero will open with that item marked. Nice!

