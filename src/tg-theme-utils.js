function injectScript(url, async) {
  const script = document.createElement('script');
  script.src = url;
  script.async = async;
  document.head.appendChild(script);
}

function injectCSS(url) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = url;
  document.head.appendChild(link);
}