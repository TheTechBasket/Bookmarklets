javascript: Q = [];
c = location.search.slice(1).split('&');
for (i in c) {
f = c[i].split('=');
if (f[0] == 'q' || f[0] == 'as_q' || f[0] == 'p' || f[0] == 'query')
if (f[1]) Q.push(f[1])
}
R = unescape(Q.join('; ').replace(/\+/g, ' '));
location = 'https://search.yahoo.com/search?q=' + escape(R);