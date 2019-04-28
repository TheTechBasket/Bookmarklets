javascript: q = "" + (window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text);
if (!q) q = prompt("You didn't select any text. Enter a search phrase:", "");
if (q != null) location = ("http://www.google.com/search?num=100&q=site:" + escape(location.hostname) + " \"" + escape(q.replace(/\"/g, "")) + "\"").replace(/ /g, "+");
void 0