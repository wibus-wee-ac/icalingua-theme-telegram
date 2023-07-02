window.onload = function() {
  const scriptElement = document.head.getElementsByTagName('script')[0].src;
  const refineScript = document.createElement('script');
  refineScript.type = 'module';
  refineScript.src = scriptElement.replace('addon.js', 'main.js');
  document.head.appendChild(refineScript);
}