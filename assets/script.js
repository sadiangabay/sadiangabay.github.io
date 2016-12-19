/* unorphan */
(function () {
  var els = document.querySelectorAll('h1 a, h1, h2, p.brief-intro, .pull-quote');
  for (var i = 0, len = els.length; i < len; i++) {
    var el = els[i];
    var last = el.lastChild;

    if (last && last.nodeType === 3) {
      console.log('=>', last.nodeValue, last.nodeValue.replace(/\s+([^\s]+\s*)$/g, '\xA0$1'));
      last.nodeValue = last.nodeValue.replace(/\s+([^\s]+\s*)$/g, '\xA0$1');
    }
  }
})();

/* loaded */
document.documentElement.className += ' loaded';

/* hljs */
(function () {
  var codes = document.querySelectorAll('pre > code');
  for (var i = 0, len = codes.length; i < len; i++) {
    var block = codes[i];
    hljs.highlightBlock(block);
  }
})();
