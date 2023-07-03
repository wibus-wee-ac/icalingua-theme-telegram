window.onload = function () {
  const scriptElement = document.head.getElementsByTagName('script')[0].src;
  window.theme = {
    dev: false,
    location: decodeURIComponent(scriptElement.replace('addon.js', '').replace('file://', ''))
  }
  const refineScript = document.createElement('script');
  refineScript.type = 'module';
  refineScript.src = scriptElement.replace('addon.js', 'main.js');
  document.head.appendChild(refineScript);
}