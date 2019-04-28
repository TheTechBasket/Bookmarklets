﻿javascript: (function() {
var el = document.createElement('script');
el.type = 'text/javascript';
el.src = 'https://micmro.github.io/performance-bookmarklet/dist/performanceBookmarklet.min.js';
el.onerror = function() {
alert("Looks like the Content Security Policy directive is blocking the use of bookmarklets\n\nYou can copy and paste the content of:\n\n\"https://micmro.github.io/performance-bookmarklet/dist/performanceBookmarklet.min.js\"\n\ninto your console instead\n\n(link is in console already)");
console.log("https://micmro.github.io/performance-bookmarklet/dist/performanceBookmarklet.min.js");
};
document.getElementsByTagName('body')[0].appendChild(el);
})();