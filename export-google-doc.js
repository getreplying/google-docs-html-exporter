/* Google Docs HTML Exporter — MIT License
 * Run in the DevTools Console on a Google Doc's /mobilebasic page.
 * This is the initial version tested successfully by the first user.
 */
(() => {
  const source = document.querySelector('#contents, .doc');

  if (!source || !source.innerText.trim()) {
    throw new Error('No document text found.');
  }

  const content = source.cloneNode(true);

  content.querySelectorAll(
    'script, iframe, object, embed, form'
  ).forEach(el => el.remove());

  // Remove executable event handlers from the saved copy.
  [content, ...content.querySelectorAll('*')].forEach(el => {
    [...el.attributes].forEach(attr => {
      if (attr.name.startsWith('on')) {
        el.removeAttribute(attr.name);
      }
    });
  });

  // Preserve supported hyperlink destinations.
  content.querySelectorAll('a[href]').forEach(link => {
    const url = new URL(link.getAttribute('href'), location.href);
    if (['http:', 'https:', 'mailto:'].includes(url.protocol)) {
      link.setAttribute('href', url.href);
    } else {
      link.removeAttribute('href');
    }
  });

  const styles = [...document.querySelectorAll('style')]
    .map(el => el.outerHTML).join('\n');

  const html = `<!doctype html>
<html><head><meta charset="utf-8">
<title>Saved document</title>
${styles}
</head><body>${content.outerHTML}</body></html>`;

  const url = URL.createObjectURL(
    new Blob([html], { type: 'text/html;charset=utf-8' })
  );

  const download = document.createElement('a');
  download.href = url;
  download.download = 'google-doc-content.html';
  document.body.appendChild(download);
  download.click();
  download.remove();

  setTimeout(() => URL.revokeObjectURL(url), 10000);
  console.log('Saved document text and HTML hyperlinks.');
})();
