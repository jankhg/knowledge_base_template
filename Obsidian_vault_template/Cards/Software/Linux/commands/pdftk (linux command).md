up:: [[Linux commands]]
dates:: 2025-04-14
tags:: 

---

# pdftk (linux command)

## Add an attachment to a PDF file

```bash
pdftk freigabe.pdf attach_files paper.pdf output freigabe_with_attachment.pdf
```

## Extract all attachments to a subfolder
```bash
mkdir atts
pdftk file.pdf unpack_files output ./atts/
```