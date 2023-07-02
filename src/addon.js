window.onload = function() {
  const scriptElement = document.head.getElementsByTagName('script')[0].src;
  const refineScript = document.createElement('script');
  refineScript.type = 'module';
  refineScript.src = scriptElement.replace('addon.js', 'core.js');
  document.head.appendChild(refineScript);
}