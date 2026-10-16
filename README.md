<div align="center">

# 📄 Google Docs HTML Exporter

**Save the Google Doc already open in your browser as readable HTML—with its links.**

![Vanilla JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=black)
![No runtime dependencies](https://img.shields.io/badge/dependencies-0-16a34a)
[![License: MIT](https://img.shields.io/badge/license-MIT-2563eb)](LICENSE)

[Quick start](#-quick-start) · [What you get](#-what-you-get) · [Limitations](#-limitations) · [Credits](#-credits)

</div>

---

A small browser-console script that saves the loaded content of a Google Docs `/mobilebasic` page to an `.html` file. No extension, API key, external script, or installation required.

## ✨ What you get

- **Editable, searchable text** instead of screenshots of each page.
- **Hyperlink destinations**, including links behind labels such as “See example.”
- **Existing HTML structure and inline styles**, including headings, lists, and tables when present.
- **One HTML download** you can open in a browser or use as input for another tool.
- **Local processing.** The exporter doesn't upload your document or load third-party code.

The script removes script elements and inline event handlers from the copied content. This is not a general-purpose HTML sanitizer. Images and other referenced resources can still require network access when you open the saved file.

## 🚀 Quick start

### 1. Open the document's basic view

Open a Google Doc you can already view. Replace `/edit` and anything after it with `/mobilebasic`:

```text
Before: https://docs.google.com/document/d/YOUR_DOCUMENT_ID/edit?tab=t.0
After:  https://docs.google.com/document/d/YOUR_DOCUMENT_ID/mobilebasic
```

Wait for the text to appear. Scroll through the document and confirm that the final section has loaded.

### 2. Open the browser console

These instructions use Chrome:

| Computer | Shortcut |
| --- | --- |
| Mac | `Option` + `Command` + `J` |
| Windows / Linux | `Ctrl` + `Shift` + `J` |

If Chrome displays a paste-protection warning, review the script first, then manually type `allow pasting` **without quotation marks** and press Enter. Only do this when Chrome asks for it.

### 3. Run the exporter

Open **[export-google-doc.js](export-google-doc.js)** in this repository, select **Raw**, and copy the complete script. Paste it into the document's console and press Enter.

Your browser should download **`google-doc-content.html`**. The console prints a completion message; check your browser’s downloads to confirm the file was saved.

### 4. Check your file

Open the downloaded file in a browser. Check the first and last sections, an important table, and a few hyperlinks. You can select and copy text or pass the HTML into your preferred document-processing tool.

> **Output:** an HTML file. The script does not create a native Google Doc, DOCX, or PDF.

## 🧪 Validation

The initial version was tested by its first user on a large document. A separate inspection of the resulting HTML reported:

| Metric | Reported result |
| --- | ---: |
| Words | Approximately 24,000 |
| Links | 627 |
| Unique link destinations | 535 |

The user reported that the export worked, including URLs behind descriptive link labels. This is **one real-world report**, not a guarantee of compatibility with every document. No private document or its contents are included in this repository.

This release preserves the behavior of that initial tested script. JavaScript syntax was checked during packaging; automated browser tests have not been completed. Broader browser and document coverage is welcome.

## 📌 Limitations

- **Only loaded content is exported.** Other document tabs, unloaded sections, comments, suggestions, and revision history aren't collected.
- **Formatting is best effort.** The basic view may differ from the editor; page breaks and complex layouts may change.
- **Images aren't embedded.** Remote images may need an internet connection or a signed-in session. Temporary image URLs can expire.
- **Links use their original destinations.** HTTP, HTTPS, and email links are kept. Links to document sections may reopen the original online document rather than jump inside the saved file; other URL schemes are removed.
- **Google can change the page structure.** This is an unofficial tool, not a supported Google export API.
- **Sign-in and viewing access are still required.** The script works with content already available in your browser.

Use it for documents you own or have permission to save. The MIT license covers this code, not the documents you export.

<details>
<summary><strong>🛠 Troubleshooting</strong></summary>

**“No document text found.”**  
Confirm the address ends in `/mobilebasic`, wait for the document to load, and check that the page shows document text rather than a sign-in or access message. Google's layout may also have changed.

**`Unexpected identifier 'pasting'`**  
Chrome is treating `allow pasting` as JavaScript. If you can already paste the script, skip that step; the phrase is only for the paste-protection prompt.

**`undefined` appears after running the script.**  
That is a normal console result. Check your downloads and the “Saved document text and HTML hyperlinks” message.

**Some text or links are missing.**  
Confirm that the content appears in the basic view and is fully loaded. Re-run the exporter, then check the saved file again. Other document tabs require separate exports.

**The file looks different or images are missing.**  
HTML preserves available structure, not the exact editor rendering. Remote images may no longer be accessible. Don't assume a successful download means every element survived.

</details>

## 🤝 Contribute

Small improvements and reproducible bug reports are welcome. For a bug, include your browser/version, the error message, and a minimal **synthetic** example where possible. Don't post private documents, document IDs, exported client files, or sign-in details.

## 🙏 Credits

- [Snarp's Google Docs copying gist](https://gist.github.com/Snarp/6c06f60899ca3f43bdd3d8170885f83f) documents the existing `/mobilebasic` approach and community workarounds. This project offers a direct HTML download built around that established approach.
- [iamarghamallick's Google Drive PDF script](https://github.com/iamarghamallick/How-to-download-protected-view-only-files-from-Google-Drive) inspired the original question. Its page-image-to-PDF workflow differs from this text-and-HTML exporter.
- Created with AI assistance and refined through user testing.

Built for a practical workflow at **[Replying.io](https://replying.io)**. Unofficial; not affiliated with Google.

## 📜 License

[MIT](LICENSE)
